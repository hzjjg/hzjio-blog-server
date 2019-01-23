pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd ./docker'
                sh 'docker-compose  build'             
                echo 'Building' 
            }
        }
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                sh 'docker-compose up -d'
                echo './deploy staging'                
            }
        }
    }

    post {        
        always {            
            echo '部署流程结束'            
            // deleteDir() /* clean up our workspace */        
        }        
        success {            
            echo '成功!'        
        }        
        unstable {            
            echo 'I am unstable :/'        
        }        
        failure {            
            echo '恭喜你，部署失败'        
        }        
        changed {            
            echo '接下来宣布结果……'        
        }    
    }
}