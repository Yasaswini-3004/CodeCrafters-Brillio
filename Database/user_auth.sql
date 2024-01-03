-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2024 at 11:11 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_auth`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `jobTitle` varchar(255) NOT NULL,
  `jobkey` varchar(10) NOT NULL,
  `location` varchar(255) NOT NULL,
  `jobType` varchar(50) NOT NULL,
  `yearsofexp` varchar(50) NOT NULL,
  `jobSummary` text NOT NULL,
  `responsibilities` text NOT NULL,
  `requiredSkills` text NOT NULL,
  `tags` varchar(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `jobTitle`, `jobkey`, `location`, `jobType`, `yearsofexp`, `jobSummary`, `responsibilities`, `requiredSkills`, `tags`, `date`) VALUES
(1, 'Backend Lead Developer', 'R01530388', 'Tampa, United States', 'full-time', '3', 'Primary Skills CI/CD Pipeline, Spring REST, Java, Hibernate, Oracle RDBMS, Kafka, Docker, Java REST Web API, Spring Core, Spring Boot, Kubernetes, MySQL Secondary Skills AWS, Jenkins, PostgreSQL, JDBC, Splunk, Spring MicroService', 'Senior Backend resource (Spring Boot - Microservices) JAVA, RESTful APIs, Springboot, Webservices. Strong understanding of microservices architecture, Splunk, JDBC, Hibernate, Jenkins, AWS, Scripting knowledge - MySQL, Oracle, PostgreSQL Database Java 1.8, Core Spring Framework, Webservices (Rest SOAP), Micro services, Spring Boot, Spring REST, Spring DataJDBC, Hibernate, Spring Batch, Oracle, PL SQL, Basic Unix Linux, Git, Testing Framework JUnit Mockito, Swagger Develop and Build Micro services using Spring boot. Developing enterprise grade highly scalable java based application Writing test cases using Java testing framework like JUnit, Mockito. Displaying initiative and an ability to lead others, and develop applications team disciplined manner Utilizing and applying robust analytic thinking with the ability to identify, debug, and resolve technical issues. Conduct team code reviews Working independently to evaluate and make strategic decisions that will address specific technology design needs and issues within their technology area Providing coaching and technical mentoring to more junior developers', 'CI/CD Pipeline, Spring REST, Java, Hibernate, Oracle RDBMS, Kafka, Docker, Java REST Web API, Spring Core, Spring Boot, Kubernetes, MySQL', 'AWS, JAVA, HIBERNATE, ORACLE, SPRING REST', '2023-12-20'),
(2, 'Salesforce Lead Developer', 'R01530812', 'Santa Clara, United States', 'full-time', '3', 'Primary Skills Salesforce Platform-Apex, Salesforce Platform-Apex Web Services, Salesforce Platform-Async Apex, Salesforce Platform-Data Modelling, Salesforce Platform-Flow Automation, Salesforce Platform-Javascript, Salesforce Platform-Lwc, Salesforce Platform-Sharing & Security, Salesforce Platform-Soql, Salesforce Platform-Visual Force, salesforce Platform-apex triggers, JavaScript, Salesforce Platform-Configuration Specialization Salesforce Platform: Lead Engineer', 'Visual Force and Apex development Experience in designing custom objects, custom fields, picklists, page layouts, workflow, approval processes, validation rules, custom tabs, reports, Visualforce pages, Apex classes, complex reports, dashboards, triggers and email generation according to application requirements Experience in Pardot customization and integration, digital engagement, Lightning design development, Lightning web component (LWC) development Ability to develop, track and create deployable packages across multiple environments. Writing deployment instructions pre/post deployment steps Ability to deploy the changes to other Sandbox environments and production environment Ability to communicate with customers and provide consultation on Salesforce solutions Hands-on experience in administration setup, e.g., managing users, security controls, and data as well as creating roles, profiles and permission sets. Good problem-solving skills and ability to give optimal solutions Demonstrate excellent verbal and written communication skills within individual functional areas', 'Salesforce Platform-Apex, Salesforce Platform-Apex Web Services, Salesforce Platform-Async Apex, Salesforce Platform-Data Modelling, Salesforce Platform-Flow Automation, Salesforce Platform-Javascript, Salesforce Platform-Lwc, Salesforce Platform-Sharing & Security, Salesforce Platform-Soql, Salesforce Platform-Visual Force, salesforce Platform-apex triggers, JavaScript, Salesforce Platform-Configuration', 'Salesforce, Javascript, Salesforce Platform-Javascript, Salesforce Platform-Lwc, Salesforce Platform-Sharing & Security', '2023-12-20'),
(3, 'Database Developer', 'R01529403', 'Bangalore, India', 'full-time', '5', 'ey Skill Required: - The ideal candidate should have 5 years of working experience in PostgreSQL and MySQL Development. He/she should be following agile Development Methodologies. Ability to efficiently write database code without compromising data quality, privacy, or security. Knowledge of database design principles, query optimization, index management, integrity checks, statistics, and isolation levels Ability to translate business rules into db objects, extract business rules from analysis of existing SQL scripts Expert Level pgSQL, including stored procedures, functions, triggers, and views. Knowledge of JSON and PostgreSQL support for JSON. PostGIS proficiency and grasp of core geospatial concepts. Experience with message queuing, full text indexing, and other high performance data concepts. Develop, edit, and implement SQL extracts that meet the requirements of the client. Ability to analyze, and report database performance issues due to SQL code, Query. Excellent ability in Logical and Physical Data Model creation Good technical writing and documentation skills Expertise in writing and optimizing complex SQL queries. Proficiency in Data Warehouse and BI Tools, like Tableau, Looker Knowledge of Unix shell scripting Understanding of installation and configuration of MySQL in a multi-master environment Detailed knowledge of My Sql tables like MyISAM, Heap, Merge, INNO DB, ISAM Knowledge of MySQL Workbench', 'ey Skill Required: - The ideal candidate should have 5 years of working experience in PostgreSQL and MySQL Development. He/she should be following agile Development Methodologies. Ability to efficiently write database code without compromising data quality, privacy, or security. Knowledge of database design principles, query optimization, index management, integrity checks, statistics, and isolation levels Ability to translate business rules into db objects, extract business rules from analysis of existing SQL scripts Expert Level pgSQL, including stored procedures, functions, triggers, and views. Knowledge of JSON and PostgreSQL support for JSON. PostGIS proficiency and grasp of core geospatial concepts. Experience with message queuing, full text indexing, and other high performance data concepts. Develop, edit, and implement SQL extracts that meet the requirements of the client. Ability to analyze, and report database performance issues due to SQL code, Query. Excellent ability in Logical and Physical Data Model creation Good technical writing and documentation skills Expertise in writing and optimizing complex SQL queries. Proficiency in Data Warehouse and BI Tools, like Tableau, Looker Knowledge of Unix shell scripting Understanding of installation and configuration of MySQL in a multi-master environment Detailed knowledge of My Sql tables like MyISAM, Heap, Merge, INNO DB, ISAM Knowledge of MySQL Workbench', 'Database & Middleware Support: Engineer, Systems & Storage,MySQL, Oracle DBA, Oracle PL/SQL, Postgres', 'MySQL, Oracle DBA, Oracle PL/SQL, Postgres', '2023-12-20'),
(4, 'Engineer', 'R01528981', 'Chennai, India', 'full-time', '2', 'Activiti, Automation Anywhere Enterprise, BluePrism, Bonita, Camunda, HP Operations Orchestration, JBPM, Ops Center, Oracle OPA, Performance Tuning / Automation, Power Automate (Flow), Project Service Automation, SoapUI', 'Automation Specialization: Engineer, Systems & Storage', 'Activiti, Automation Anywhere Enterprise, BluePrism, Bonita, Linux, SQLCamunda, HP Operations Orchestration, JBPM, Ops Center, Oracle OPA, Performance Tuning / Automation, Power Automate (Flow), Project Service Automation, SoapUI, ', 'Linux, SQL, BluePrism, Bonita, Camunda, HP Operations Orchestration, JBPM, Ops Center, Oracle OPA, Performance Tuning / Automation', '2023-12-20'),
(5, 'Business Analyst', 'R01528077', 'Hyderabad, India', 'full-time', '3', 'Data Analysis: Business Analyst', '\"1.In depth knowledge of Telecommunications line of business 2.Conducting workshop with IT/business/operations team in order to understand the AS-IS processes / requirements and suggest TO-BE processes/requirements 3.Business Requirement assessment and document business processes, flows, use cases and business requirements and help in solution development and deployment 4.Work in cross functional team environment and liaise between the development / testing teams and the client in order to cascade the requirements 5. Defining the analysis approach for projects, ensuring they meet Brillio and customer needs for successful delivery 6.Interact with business/SMEs/Technical stakeholders, steer workshop for requirement elicitation, system impact analysis 7.Lead a team of Junior BAs, Testers 8. Review analysis documents - BRD, FSD, User Stories and take stakeholder sign-off from client 9.Review test strategy, test specifications ,assist in SIT and provide UAT support 10.To understand the Business requirements from different business stakeholders and convert them into System Requirements in the form of User Stories and Acceptance Criteria 11.Use data modelling practices to analyse findings and deliver recommendations for strategic 12.Constantly be on the lookout for ways to improve monitoring, discover issues and deliver better value to the customer (User Experience Analysis). 13.Own and develop relationship with partners and work with them to optimize and enhance integration. 14.Proven Domain and Business Functions expertise in Telecommunications domain 15. Resolves conflicts by demonstrating leadership and appropriate decision-making competencies. Good to have experience/certified in SAFE practice', 'Data Modelling Fundamentals, Hive, Python, Spark - Pyspark, SQL, SQL (Basic + Advanced)', 'Data Modelling Fundamentals, Hive, Python, Spark, Pyspark, SQL', '2023-12-20'),
(6, 'Data Specialist', 'R01527671', 'Bangalore, India', 'full-time', '2', 'Must have Hands on Experience on Kubernetes , Docker, Microservices, any one of Kafka/spark/pulsar/flink, CI/CD and Java. Job Responsibilities: As the Data Engineer, you are expected to engineer, develop, support, and deliver real-time streaming applications that model real-world network entities, and have a good understanding of the Telecom Network KPIs to improve the customer experience through automation of operational network data. Real-time application development will include building stateful in-memory backends, real-time streaming APIs , leveraging real-time databases such as Apache Druid. • Developing streaming data pipelines that will enrich the data and support the use cases for telecom networks • Collaborating closely with multiple stakeholders, gathering requirements and seeking iterative feedback on recently delivered application features. • Participating in peer review sessions to provide teammates with code review as well as architectural and design feedback. • Composing detailed low-level design documentation, call flows, and architecture diagrams for the solutions you build. • Perform duties with minimum supervision and participate in cross-functional projects as scheduled. Skills: • Experience with Java, K8S, Flink/Spark, Argo CD/Workflow, Prometheus, and Aether. • Familiarity with object-oriented design patterns. • Experience with Application Development DevOps Tools. • Experience with distributed cloud-native application design deployed on Kubernetes platforms. • Experience with PostGres, Druid, and Oracle databases. • Experience with Messaging Bus - Kafka/Pulsar • Experience with building real-time applications which leverage streaming data. • Experience with streaming message bus platforming, either Kafka or Pulsar. • Experience with Apache Spark applications and Hadoop platforms. • Strong problem solving skills. • Strong written and oral communication skills', 'Must have Hands on Experience on Kubernetes , Docker, Microservices, any one of Kafka/spark/pulsar/flink, CI/CD and Java. Job Responsibilities: As the Data Engineer, you are expected to engineer, develop, support, and deliver real-time streaming applications that model real-world network entities, and have a good understanding of the Telecom Network KPIs to improve the customer experience through automation of operational network data. Real-time application development will include building stateful in-memory backends, real-time streaming APIs , leveraging real-time databases such as Apache Druid. • Developing streaming data pipelines that will enrich the data and support the use cases for telecom networks • Collaborating closely with multiple stakeholders, gathering requirements and seeking iterative feedback on recently delivered application features. • Participating in peer review sessions to provide teammates with code review as well as architectural and design feedback. • Composing detailed low-level design documentation, call flows, and architecture diagrams for the solutions you build. • Perform duties with minimum supervision and participate in cross-functional projects as scheduled. Skills: • Experience with Java, K8S, Flink/Spark, Argo CD/Workflow, Prometheus, and Aether. • Familiarity with object-oriented design patterns. • Experience with Application Development DevOps Tools. • Experience with distributed cloud-native application design deployed on Kubernetes platforms. • Experience with PostGres, Druid, and Oracle databases. • Experience with Messaging Bus - Kafka/Pulsar • Experience with building real-time applications which leverage streaming data. • Experience with streaming message bus platforming, either Kafka or Pulsar. • Experience with Apache Spark applications and Hadoop platforms. • Strong problem solving skills. • Strong written and oral communication skills', 'Docker, Flink, Kafka, Kubernetes,Spark - Pyspark', 'Spark, Pyspark, Docker, Flink, Kafka, Kubernetes', '2023-12-20'),
(7, 'Fullstack Engineer - React Java ', 'R01527438', 'Chennai, India', 'full-time', '4', 'Fullstack Engineer - React Java with more than 4 years of experience', 'Java Fullstack with Microservices: Software Development Lead', 'CI/CD Pipeline, CSS3, Docker, Hibernate, HTML5, Java, MySQL, Oracle RDBMS, React JS, Spring Boot, Spring Core, JavaScript', 'CI/CD Pipeline, CSS3, Docker, Hibernate, HTML5, Java, MySQL, Oracle RDBMS, React JS, Spring Boot, Spring Core, JavaScript', '2023-12-20'),
(8, 'DevOps Architect', 'R01526122', 'Bangalore, India', 'full-time', '4', 'Architecture • Experience with network/compute/storage sizing • Experience with infrastructure and network diagrams • Experience with cost modelling, cost forecast/estimation, cost optimization • Performance optimizations • Experience with high available / load-balanced / scalable cloud architectures with DR / data backup strategies / GTM • Experience with deployment strategies such as blue/green, canary, etc • Experienced in implementing security best practices, vulnerability management and patching strategies Cloud • Architect/sysops experience in AWS cloud. Experience with other cloud is advantage. Familiar with cloud migration scenarios for different architectures (micro-services/monolith/etc). • AWS: VPC/gateways/endpoints/SG/NACL, EKS, ec2, s3, ALB/NLB, Elasticache, RDS, DynamoDB, ACM, KMS, Secrets Manager, CUR/Billing/Cost-explorer, etc OS • Multiple flavors of Linux, base images, security/CIS benchmarks, tcp and system settings Network • Has knowledge on network topology in cloud environments (zones / routing / firewall / security groups / NACLs / network endpoints and gateways/privatelinks), network benchmark and troubleshooting skills desired API Gateway / load-balancers • Has experience with Kong(various plugins) and other API gateways, reverse proxies, nginx skills, familiarity with managed and unmanaged load-balancers (layer 4/7), throttling and controls Compute/orchestration • Experience with virtual machines, cloud instances/types, right sizing, auto-scaling • Hands-on knowledge with Kubernetes/EKS (cluster upgrades/resource quota/sidecar injector/cluster-autoscaler/topology-hints/node groups/HPA/RBAC/secret management drivers/storage drivers/DaemonSets/CoreDNS/security best practices) • Experience implementing Calico CNI, network policies and best practices • Experience implementing service mesh(Istio), virtual services, telemetry, policy enforcements and security best practices • Experience implementing Kong istio gateway with desired plugins, Kiali for observability • Experience with event-driven(preferably kafka) autoscaling with Keda • Experience scraping metrics from microservices using Prometheus and log aggregation using fluent-bit DB • Experience with Postgres(other relational DB), DynamoDB(other popular NoSQL) Others (data-stores/middleware/cache) • Experience with Kafka/zookeeper, KDS, Redis/memcache, etc Open-source stacks • Experience implementing open-source stacks such as Apache Druid, Cortex, Drupal, etc Observability • Experience working with Prometheus/grafana, Tempo/Loki/Zipkin, Instana, Cloudwatch, etc Automation/IaC/CI/CD • Experience working with GitHub, GitHub actions, Harness, Helm, Terraform, Docker images, JFrog Artifactory, ECR and other image repositories', 'Architecture • Experience with network/compute/storage sizing • Experience with infrastructure and network diagrams • Experience with cost modelling, cost forecast/estimation, cost optimization • Performance optimizations • Experience with high available / load-balanced / scalable cloud architectures with DR / data backup strategies / GTM • Experience with deployment strategies such as blue/green, canary, etc • Experienced in implementing security best practices, vulnerability management and patching strategies Cloud • Architect/sysops experience in AWS cloud. Experience with other cloud is advantage. Familiar with cloud migration scenarios for different architectures (micro-services/monolith/etc). • AWS: VPC/gateways/endpoints/SG/NACL, EKS, ec2, s3, ALB/NLB, Elasticache, RDS, DynamoDB, ACM, KMS, Secrets Manager, CUR/Billing/Cost-explorer, etc OS • Multiple flavors of Linux, base images, security/CIS benchmarks, tcp and system settings Network • Has knowledge on network topology in cloud environments (zones / routing / firewall / security groups / NACLs / network endpoints and gateways/privatelinks), network benchmark and troubleshooting skills desired API Gateway / load-balancers • Has experience with Kong(various plugins) and other API gateways, reverse proxies, nginx skills, familiarity with managed and unmanaged load-balancers (layer 4/7), throttling and controls Compute/orchestration • Experience with virtual machines, cloud instances/types, right sizing, auto-scaling • Hands-on knowledge with Kubernetes/EKS (cluster upgrades/resource quota/sidecar injector/cluster-autoscaler/topology-hints/node groups/HPA/RBAC/secret management drivers/storage drivers/DaemonSets/CoreDNS/security best practices) • Experience implementing Calico CNI, network policies and best practices • Experience implementing service mesh(Istio), virtual services, telemetry, policy enforcements and security best practices • Experience implementing Kong istio gateway with desired plugins, Kiali for observability • Experience with event-driven(preferably kafka) autoscaling with Keda • Experience scraping metrics from microservices using Prometheus and log aggregation using fluent-bit DB • Experience with Postgres(other relational DB), DynamoDB(other popular NoSQL) Others (data-stores/middleware/cache) • Experience with Kafka/zookeeper, KDS, Redis/memcache, etc Open-source stacks • Experience implementing open-source stacks such as Apache Druid, Cortex, Drupal, etc Observability • Experience working with Prometheus/grafana, Tempo/Loki/Zipkin, Instana, Cloudwatch, etc Automation/IaC/CI/CD • Experience working with GitHub, GitHub actions, Harness, Helm, Terraform, Docker images, JFrog Artifactory, ECR and other image repositories', 'AWS CodeBuild, Terraform, CloudFormation, AWS CodeDeploy, AWS CodePipeline', 'AWS CodeBuild, Terraform, CloudFormation, AWS CodeDeploy, AWS CodePipeline', '2023-12-20'),
(9, 'Data Specialist', 'R01525514', 'Data Specialist', 'full-time', '4+', 'Azure Data Engineering Advanced: Senior Data Engineer', '1.Good understanding of Azure data factory, Azure Databricks, Pyspark, SQL 2.Working experience with API data sources, unstructured data, Data modelling experience on Azure DW and Synapse 3.Very good understanding of Agile to deliver consistent project outcome 4.Very high data affinity and strong analytical and debugging skills for data engineering pipelines 5.Good understanding of datawarehousing concepts, Slowly changing dimensions ect 6.Familarity with CICD processes 7. Experience of 4+ years on Data Engineering 7. Good understanding of Error Handling, Logging concepts for complex workflows.', 'Azure Functions,Azure Synapse ML', 'Azure Functions,Azure Synapse ML', '2023-12-20'),
(11, 'Consultant', 'R01525175', 'Bangalore, India', 'full-time', '4', '4 years of strong experience in Web UI development with React, HTML, CSS. • Should be able to prepare design documents • Ready to work with multi-vendor teams from distributed locations • About 3 to 4 hours of overlap with PST [morning] • Experienced in Agile Scrum & SDLC methodologies • Experience in integrating with Web API (Nodejs) • Soft Skills - Good communication skills, Analytical & Problem-Solving skills Good to Have skills • NodeJS, SSO, SQL • Experience working with Azure Cloud technologies • Understanding UI/UX designs', '4 years of strong experience in Web UI development with React, HTML, CSS. • Should be able to prepare design documents • Ready to work with multi-vendor teams from distributed locations • About 3 to 4 hours of overlap with PST [morning] • Experienced in Agile Scrum & SDLC methodologies • Experience in integrating with Web API (Nodejs) • Soft Skills - Good communication skills, Analytical & Problem-Solving skills Good to Have skills • NodeJS, SSO, SQL • Experience working with Azure Cloud technologies • Understanding UI/UX designs', 'AWS,Typescript, JavaScript, NodeJS, CSS3, Nestjs, React JS, Oracle RDBMS, Mongo, HTML5, Jest, Express JS', 'AWS,Typescript, JavaScript, NodeJS, CSS3, Nestjs, React JS, Oracle RDBMS, Mongo, HTML5, Jest, Express JS', '2023-12-21'),
(12, 'Senior BI Specialist', 'R01527194', 'Bangalore, India', 'full-time', '4-8', 'Insights Analysis: Senior BI Engineer', '4 to 8 years of experience in writing SQL queries and stored procedures 4 years of experience in Jaspersoft report development Expert Jasper report resource who can write complex SQL queries and high performing queries Must have built multiple Jaspersoft reports and dashboards from scratch. Expert in analyzing existing SQL queries and improving the performance Proficiency in building reports, dashboards and scorecards using BI tools such as Jaspersoft Experience working and creating Domain layer in Jasper. Working knowledge of scripting languages and Knowledge of report deployment and configuration Develop and maintain reports by translating functional requirements into easy-to-use, flexible reporting solutions and dashboards. Good to have experience in Power BI, React, Python Should have good understanding of Agile and Scrum process Critical thinker and problem-solving skills. Strong communication and interpersonal skills.', 'Jaspersoft, SQL Developer, Jasper Reports', 'Jaspersoft, SQL Developer, Jasper Reports', '2023-12-21'),
(13, 'Base 24 Developer', 'R01526586', 'Pune, India', 'full-time', '4+', 'New Opportunity from GBS APAC . Client flexible fot Thane aswell Qualifications 1.Minimum 4+ years of working experience in Base24 classic. POS experience preferred. 2.Possess strong domain/product knowledge of Base24 and card payments industry 3.Technically competent in HP Non Stop platform and excellent in TAL & COBOL programming language. 4.Knowledge on at least one replication tool used on Tandem 5.Knowledge of ASSET or FINSIM simulator 6.Self-motivated and ability to work efficiently by himself/herself as well as in team. Job Description 1.Performs BAU fixes and development projects on Base24 Classic 2.Performs Level3 production support of Base24 Classic 3.Proactively looks for Production support system improvements 4.Ready to work in shifts and provide OnCall support 5.Support SIT and UAT for Base24 development projects or projects involving Base24. 6.Create implementation plans / Review plans. 7.Deploy code in production. 8.Analyses bi-annual compliance mandates 9.Works with other teams in Technology and coordinate system related activities.', 'New Opportunity from GBS APAC . Client flexible fot Thane aswell Qualifications 1.Minimum 4+ years of working experience in Base24 classic. POS experience preferred. 2.Possess strong domain/product knowledge of Base24 and card payments industry 3.Technically competent in HP Non Stop platform and excellent in TAL & COBOL programming language. 4.Knowledge on at least one replication tool used on Tandem 5.Knowledge of ASSET or FINSIM simulator 6.Self-motivated and ability to work efficiently by himself/herself as well as in team. Job Description 1.Performs BAU fixes and development projects on Base24 Classic 2.Performs Level3 production support of Base24 Classic 3.Proactively looks for Production support system improvements 4.Ready to work in shifts and provide OnCall support 5.Support SIT and UAT for Base24 development projects or projects involving Base24. 6.Create implementation plans / Review plans. 7.Deploy code in production. 8.Analyses bi-annual compliance mandates 9.Works with other teams in Technology and coordinate system related activities.', 'Base 24 Classic', 'Base 24 Classic', '2023-12-21'),
(17, 'Contingent Worker', 'R01520439', 'Saint Louis, United States', 'full-time', '4', 'Role: ServiceNow Architect Techno Manager  Functional Area: ServiceNow  Employment Type: Permanent', 'The ServiceNow Architect will be responsible for mapping business requirements and spearheading the design, development and implementation of the ServiceNow solution. Working closely with key Organization stakeholders, the successful applicant will define the integration requirements before developing the overall architecture plans.  Selected candidate will be required to:  Lead and deliver requirements, scoping and design workshops, ensuring requirements are well documented Provide expert level support and technical mentoring to implementation team Maintain deep, comprehensive knowledge of ServiceNow’s capabilities and constraints. Recognize and develop opportunities to leverage ServiceNow as a platform. As a senior technical member of the team, deliver hands-on configuration, development and integration services and serve in a delivery assurance capacity for all project deliverables Plan and coordinate all phases of testing and test acceptance; design and oversee development of testing related work products; lead test remediation cycles Support practice build efforts to include development of practice intellectual property (IP) Develop and present business case material for senior prospect and customer stakeholders. Create and deliver tailored presentations and product demonstrations Scoping and delivering Proof of Concept / Proof of Value engagements with prospects Responding to Request for Information/Proposal documents In conjunction with Sales Personnel and Professional Services, conduct transition briefing – communicate commitments, expectations, etc in preparation for deployment Act as the ServiceNow subject matter expert at Executive briefings/marketing events', 'The resource should have 3 to 4 years of architect experience. Minimum 4+ years of experience in ServiceNow development. Should have good communication skill. Should have ServiceNow Certified Admin certificate and ITSM – CIS certificate (Better 1 or more CIS certificates) Customer handling experience with 4 or 5 projects.', 'ITSM – CIS certificate ,ServiceNow development.', '2023-12-28'),
(18, 'PCF to Azure AKS Migration Developer - R01530767', 'R01530767', 'Edison, United States', 'full-time', '10', 'We are seeking a skilled and experienced PCF to Azure AKS Migration Developer to join our team and lead the migration of applications and workloads from Pivotal Cloud Foundry to Azure Kubernetes Service. In this role, you will play a crucial part in our cloud transformation journey and ensure the seamless migration of our applications. Ideal candidate comes with 8-10 years of overall experience and in last 2 years has hand on experience in migrating at least 1 PCF to Azure / AWS migration. ', 'Migration Planning: Collaborate with cross-functional teams to develop a comprehensive migration strategy, including assessment, planning, and execution phases. Application Assessment: Evaluate existing PCF-based applications to determine their compatibility and readiness for migration to Azure AKS. Containerization: Containerize applications and workloads, ensuring they are optimized for deployment on Azure AKS. Kubernetes Configuration: Manage the configuration and deployment of applications on Azure AKS, utilizing Kubernetes best practices. Deployment Automation: Develop and implement automation scripts and pipelines for the deployment of applications on AKS using tools like Azure DevOps or similar. Security and Compliance: Ensure that migrated applications meet security and compliance requirements and implement security best practices on Azure AKS. Monitoring and Scaling: Set up monitoring, logging, and scaling solutions for applications on AKS to maintain high availability and performance. Documentation: Create comprehensive documentation for the migration process, configurations, and best practices. Collaboration: Work closely with cloud architects, developers, and operations teams to resolve technical issues and ensure a smooth migration process.', 'Azure API Management, Azure PaaS Services, Azure Networking, Azure Logic Apps, Azure App Service, Azure SQL, Azure AD', 'Azure API Management, Azure PaaS Services, Azure Networking, Azure Logic Apps, Azure App Service, Azure SQL, Azure AD', '2023-12-29');

-- --------------------------------------------------------

--
-- Table structure for table `profile_info`
--

CREATE TABLE `profile_info` (
  `profile_id` int(11) NOT NULL,
  `Contact_Number` varchar(255) NOT NULL,
  `Date_of_Birth` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `Addresss` varchar(255) NOT NULL,
  `Nationality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile_info`
--

INSERT INTO `profile_info` (`profile_id`, `Contact_Number`, `Date_of_Birth`, `Gender`, `Addresss`, `Nationality`) VALUES
(1, '', '0000-00-00', '', '', ''),
(2, '', '0000-00-00', '', '', ''),
(3, '', '0000-00-00', '', 'Shantiban Society, Katraj-Kondhwa road.', 'India'),
(4, '', '0000-00-00', '', '', ''),
(5, '', '0000-00-00', '', '', ''),
(6, '', '0000-00-00', '', '', ''),
(7, '', '0000-00-00', '', 'Shantiban Society, Katraj-Kondhwa road.', 'India'),
(8, '', '0000-00-00', '', '', ''),
(9, '', '0000-00-00', '', 'ffffffffffffffffff', 'India'),
(10, '', '0000-00-00', '', '', ''),
(11, '+917083761920', '2023-12-06', '', 'Shantiban Society, Katraj-Kondhwa road.', 'China'),
(12, '', '0000-00-00', '', '', ''),
(13, '+917083761920', '2023-12-06', '', 'Shantiban Society, Katraj-Kondhwa road.', 'China'),
(14, '', '0000-00-00', '', '', ''),
(15, '+917083761920', '0000-00-00', 'Other', 'Shantiban Society, Katraj-Kondhwa road.', 'Russia'),
(16, '', '0000-00-00', '', '', ''),
(17, '+917083761920', '0000-00-00', 'Female', 'Shantiban Society, Katraj-Kondhwa road.', 'Russia'),
(18, '', '0000-00-00', '', '', ''),
(19, '+917083761920', '2023-12-03', 'Male', 'Shantiban Society, Katraj-Kondhwa road.', 'USA');

-- --------------------------------------------------------

--
-- Table structure for table `sent_emails`
--

CREATE TABLE `sent_emails` (
  `id` int(11) NOT NULL,
  `FullName` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sent_emails`
--

INSERT INTO `sent_emails` (`id`, `FullName`, `Email`, `Date`, `Time`) VALUES
(1, ' Abiral_Pandey_Fullstack_Java', 'abiral.pandey88@gmail.com', '2023-12-27', '14:47:03'),
(2, 'AjayKumar', 'ajaydt@gmail.com', '2023-12-27', '16:46:40'),
(3, 'Alekhya Resume', 'alekhya.workmail@gmail.com', '2023-12-27', '18:03:57'),
(4, 'B Suresh Kumar_Project Manager_1', 'sureshkumar.basetti@gmail.com', '2023-12-27', '18:03:57'),
(5, 'Balakrishna Sudabathula', 'bsudabathula@gmail.com', '2023-12-27', '18:03:57'),
(6, 'Alekhya Resume', 'alekhya.workmail@gmail.com', '2023-12-27', '18:07:07'),
(7, 'Avathika BA-Healthcare_', 'sam@vishconsultingservices.com', '2023-12-28', '08:25:30'),
(8, 'Amulya Komatineni', 'amulya.javadeveloper@gmail.com', '2023-12-29', '06:44:38'),
(9, 'Amulya Komatineni', 'amulya.javadeveloper@gmail.com', '2023-12-29', '13:44:53'),
(10, 'Amulya Komatineni', 'amulya.javadeveloper@gmail.com', '2023-12-29', '13:50:28'),
(11, '', '', '2023-12-29', '14:06:13'),
(12, 'Alekhya Resume', 'alekhya.workmail@gmail.com', '2023-12-29', '14:15:04'),
(13, 'B Suresh Kumar_Project Manager_1', 'sureshkumar.basetti@gmail.com', '2023-12-29', '14:15:04'),
(14, 'Balakrishna Sudabathula', 'bsudabathula@gmail.com', '2023-12-29', '14:15:04'),
(15, '', '', '2023-12-29', '16:50:21'),
(16, '', '', '2023-12-29', '16:51:51'),
(17, '', '', '2023-12-29', '16:53:29'),
(18, '', '', '2023-12-29', '16:59:23'),
(19, 'Amulya Komatineni', 'amulya.javadeveloper@gmail.com', '2023-12-29', '16:59:51'),
(20, '', '', '2023-12-30', '13:49:27'),
(21, '', '', '2023-12-30', '14:15:22'),
(22, '', '', '2023-12-31', '14:28:44'),
(23, '', '', '2023-12-31', '16:03:00'),
(24, '', '', '2023-12-31', '16:03:22'),
(25, '', '', '2023-12-31', '16:09:51'),
(26, '', '', '2023-12-31', '16:10:10'),
(27, '', '', '2023-12-31', '16:13:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(1, 'ok', '$2y$10$gr4sCeDRn7PZd3S4ySw2XOwbjwa4giScig5czJX1jJdYMRetH25sO', 'ok'),
(2, 'Codecrafters', '$2y$10$xxhWI3xrgVB4enU7MeA1vuZKeHny6MUy8w0BAiESXI9r7GtNHHXCa', 'desuyasaswini@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile_info`
--
ALTER TABLE `profile_info`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `sent_emails`
--
ALTER TABLE `sent_emails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `profile_info`
--
ALTER TABLE `profile_info`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `sent_emails`
--
ALTER TABLE `sent_emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
