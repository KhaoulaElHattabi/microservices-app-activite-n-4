## Activité Pratique n°4 : e-store Microservices app.


-  Cette application avec une architecture Microservice en utilisant Spring Boot
-  Ce projet met en œuvre une architecture microservices avec des services dédiés à la gestion des commandes, à l'inventaire des produits, à la gestion des clients, ainsi qu'un service de passerelle (Gateway) qui assure la decouverte dynamique des microservice.
-  L'application contient les services suivants : customer, order, inventory, gatewaye et un config service.
-   Chaque service est conçu pour fonctionner de manière indépendante, améliorant la flexibilité et la scalabilité du système.

#### 0 - Project Hierarchy 

- Initialisation des microservices avec les dependances necessaires: Spring JPA, Actuator, Consul Discovery, REST Repository, Config Client..etc

![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/b6baf3e7-136c-4c84-8abe-64a888c77cbb)!

#### 1 - Consul Discovery 
- Pour assurer le discovery avec **Consul**, on a activé le serveur avec la commande
  ``` consul agent -server -bootstrap-expect=1 -data-dir= consul-data -ui -bind=ip_adresse ```
- Ajouter une configuration dans les proprietées de **config-service** en ajoutant aussi des annotation ***@EnableConfigServer @EnableDiscoveryClient** dans le main de l'application
  
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/12940ae5-702c-49fd-920a-6c176b68bd70)

- Interface de Consul qui contient les services
  
  ![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/a65bf163-29a3-41ba-91cc-834d9faf3054)

- **Consul Discovery** aide à la gestion, la configuration et la decouverte ds services d'une façon dynamique dans un enviromment distribuées.
  
#### 2 - Spring Cloud Config
- Utilisation d'un **config-repo** qui contient des varibles des environnements séparées comme dev et prod avec une configuration initiales de chaque microservice cela aide à la gestion des configuration d'une façon simple et dynamiqe
  
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/9f688a93-2f8a-42fe-b54d-bf2d386e5cd1)

  - Utilisation des variables dans un controller web pour le test
  
  ![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/8d5ea783-b4e3-4d03-a785-b7bc7e2c7639)
  
  - Affichage des variables
  
  ![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/ff70d391-8f25-41bb-9638-756d0a7b30ee)

### 3 - Spring Cloud Gateway 
- On a commencé par configurer le service gateway pour eviter la connection directe avec les services.
  ![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/281006d1-17d8-4bed-809e-93af9135d9d9)

### 4 - Customer Service
- Dans ce service on a creer une entité Customer et les données sont stocké dans la BD H2
  
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/9d527ebd-0979-45d4-9d52-47ad36432f50)
-> En fait on a l'acces au données avec le gatway en utilisant **localhost:9999**
  
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/0829c2b9-91d5-4570-b866-8c356ab9ef06)

- Utilisation des projection pour avoir seulement les champs souhaitées.

  ![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/bcc18278-1fe1-43ad-b3dc-69cd4f976539)


### 5 - Inventory Service
- Dans ce service on a creer une entité Product et les données sont stocké dans la BD H2 en configurant aussi les proprietes de microservice, et finalement on a l'acces avec le gateway
  
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/b9e9b8b8-63fa-43a3-ad5a-8bfe1de9020e)

- On a refait la meme chose pour la projection de product 

![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/25083cf3-4762-45da-8a56-d5d12cfeeb7a)


### 6 - Order Service
* La creation du service pour les commandes et la liste des produits associées à chaque commande
* Utilisation de OpenFeign qui assure la communication entre les services en utilisant des REST api(Json)
  - Pour customer service
  
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/9adb9bda-3b0f-4893-ba9d-1c31ad342ade)

  - Pour Inventory Service
    
![image](https://github.com/KhaoulaElHattabi/microservices-app-activite-n-4/assets/92638641/e9ebfecd-6af5-467a-869a-889b386b7e48)

**Remarque** : Sans oublier @EnableFeignClient 




