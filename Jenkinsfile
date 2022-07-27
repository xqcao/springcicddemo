pipeline{
  agent any
  environment{
    GIT-URL="https://github.com/xqcao/cicdreactdemo.git"
    APP-NAME="cicdreactdemo"
    IMAGE-TAG="adamcao/webappreact"
  }
  stages{
    stage("1 git clone"){
      steps{
        checkout scm
      }
    }
    ststageate("2 docker build"){
      steps{
        sh "docker build -t --build-arg git-url=${GIT-URL} --build-arg app-name=${APP-NAME} ${IMAGE-TAG}:${BUILD_NUMBER} ."
        echo "docker image is builded from step #2"
      }
    }
    // ststageate("docker image test"){
    //   steps{
    //     sh "docker run -rm --name webapp -p 80:8888 -t adamcao/webappreact:${BUILD_NUMBER}"
    //     sh ""
    //     echo "test docker image"
    //   }
    // }
    stage("3 push to docker hub"){
      steps{
        echo "#3 push to docker hub"
        sh "docker push ${IMAGE-TAG}:${BUILD_NUMBER}"
      }
    }
     stage("4 cleanup from local"){
      steps{
        echo "remove docker image from local"
        sh "docker rmi ${IMAGE-TAG}:${BUILD_NUMBER}"
        sh "docker images"
      }
    }
  }
}