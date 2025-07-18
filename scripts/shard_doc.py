#!/usr/bin/env python3
import sys, os, re

def sanitize(title: str) -> str:
    """Convert heading text to lowercase-kebab-case filename."""
    title = re.sub(r'[^\w\s-]', '', title, flags=re.UNICODE).strip().lower()
    title = re.sub(r'\s+', '-', title)
    return title or 'section'

def shard(src: str, dest: str) -> None:
    os.makedirs(dest, exist_ok=True)
    with open(src, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    sections = []  # list of (title, lines)
    in_code = False
    current_title = "__index__"
    current_lines = []

    for line in lines:
        if line.lstrip().startswith('```'):
            in_code = not in_code
        if not in_code and line.startswith('## '):
            # store previous section
            sections.append((current_title, current_lines))
            # start new section
            current_title = line[3:].strip()
            current_lines = [line]
        else:
            current_lines.append(line)
    # append the final section
    sections.append((current_title, current_lines))

    index_lines = []
    section_files = []

    for title, content in sections:
        if title == "__index__":
            index_lines = content
            continue
        # adjust heading levels (## -> #, ### -> ##, etc.)
        adjusted = []
        for l in content:
            if l.startswith('## '):
                adjusted.append('# ' + l[3:])
            elif l.startswith('### '):
                adjusted.append('## ' + l[4:])
            elif l.startswith('#### '):
                adjusted.append('### ' + l[5:])
            elif l.startswith('##### '):
                adjusted.append('#### ' + l[6:])
            else:
                adjusted.append(l)
        fname = sanitize(title) + '.md'
        with open(os.path.join(dest, fname), 'w', encoding='utf-8') as out:
            out.writelines(adjusted)
        section_files.append((title, fname))

    # write index.md
    with open(os.path.join(dest, 'index.md'), 'w', encoding='utf-8') as idx:
        idx.writelines(index_lines)
        if not index_lines or not index_lines[-1].endswith('\n'):
            idx.write('\n')
        idx.write('## Sections\n\n')
        for title, fname in section_files:
            idx.write(f'- [{title}](./{fname})\n')

def main():
    if len(sys.argv) != 3:
        print('Usage: shard_doc.py <source.md> <dest_folder>')
        sys.exit(1)
    shard(sys.argv[1], sys.argv[2])

if __name__ == '__main__':
    main() 