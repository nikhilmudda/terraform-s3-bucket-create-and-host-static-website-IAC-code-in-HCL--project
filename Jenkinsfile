pipeline {
    agent any

    environment {
        S3_BUCKET = 'jenkins-bucket-nik'
        AWS_REGION = 'ap-southeast-2'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/nikhilmudda/terraform-s3-bucket-create-and-host-static-website-IAC-code-in-HCL--project.git'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh '''
                    aws s3 sync . s3://$S3_BUCKET \
                        --exclude ".git/*" \
                        --exclude "Jenkinsfile" \
                        --delete \
                        --region $AWS_REGION
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment to S3 successful!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}
