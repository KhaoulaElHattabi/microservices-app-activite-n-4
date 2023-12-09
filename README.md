## Activité Pratique n°4 : e-store Microservices app.


-  Cette application avec une architecture Microservice en utilisant Spring Boot
-  Ce projet met en œuvre une architecture microservices avec des services dédiés à la gestion des commandes, à l'inventaire des produits, à la gestion des clients, ainsi qu'un service de passerelle (Gateway) qui assure la decouverte dynamique des microservice.
-  L'application contient les services suivants : customer, order, inventory, gatewaye et un config service.
-   Chaque service est conçu pour fonctionner de manière indépendante, améliorant la flexibilité et la scalabilité du système.

#### 0 - Project Hierarchy 

- Initialisation des microservices avec les dependances necessaires: Spring JPA, Actuator, Consul Discovery, REST Repository, Config Client..etc
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/b6baf3e7-136c-4c84-8abe-64a888c77cbb)

#### 1 - Consul Discovery 
- Pour assurer le discovery avec **Consul**, on a activé le serveur avec la commande
  ``` consul agent -server -bootstrap-expect=1 -data-dir= consul-data -ui -bind=ip_adresse ```
- Ajouter une configuration dans les proprietées de **config-service** en ajoutant aussi des annotation ***@EnableConfigServer @EnableDiscoveryClient** dans le main de l'application 
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/12940ae5-702c-49fd-920a-6c176b68bd70)

#### 2 - Spring Cloud Config
- Utilisation d'un **config-repo** qui contient des varibles des environnements séparées comme dev et prod avec une configuration initiales de chaque microservice.
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/9f688a93-2f8a-42fe-b54d-bf2d386e5cd1)


  
