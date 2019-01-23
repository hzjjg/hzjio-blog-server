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
            echo 'One way or another, I have finished'            
            // deleteDir() /* clean up our workspace */        
        }        
        success {            
            echo 'I succeeeded!'        
        }        
        unstable {            
            echo 'I am unstable :/'        
        }        
        failure {            
            echo 'I failed :('        
        }        
        changed {            
            echo 'Things were different before...'        
        }    
    }
}