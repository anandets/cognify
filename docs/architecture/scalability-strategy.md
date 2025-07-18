# Scalability Strategy
| Layer         | Strategy                                                     |
| ------------- | ------------------------------------------------------------ |
| **App Layer** | Stateless microservices + horizontal scaling on K8s          |
| **Database**  | Postgres with connection pooling, sharded read replicas      |
| **AI Models** | Host large models on Bedrock/OpenRouter, small models on GPU |
| **Media/CDN** | Chunked uploads + adaptive streaming, regional edge caching  |
| **Queue**     | Kafka/RabbitMQ for burst processing + retries                |

Elastic Autoscaling : API and worker pods auto-scale on CPU/memory

