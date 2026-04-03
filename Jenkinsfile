pipeline {
    agent any

    environment {
        APP_NAME    = "chatbot-ai"
        DEPLOY_PATH = "C:\\deployments\\chatbot-ai"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/monika-117/Chatbot-AI.git',
                    credentialsId: 'github-credentials'
                echo 'Code pulled from GitHub successfully!'
            }
        }

        stage('Validate Files') {
            steps {
                bat 'echo Checking project files...'
                bat 'dir'
                echo 'File structure verified!'
            }
        }

        stage('Lint Check') {
            steps {
                bat 'echo Checking HTML/CSS/JS files...'
                powershell '''
                    $htmlFiles = Get-ChildItem -Recurse -Filter "*.html"
                    $cssFiles  = Get-ChildItem -Recurse -Filter "*.css"
                    $jsFiles   = Get-ChildItem -Recurse -Filter "*.js"

                    Write-Host "HTML files found: $($htmlFiles.Count)"
                    Write-Host "CSS files found : $($cssFiles.Count)"
                    Write-Host "JS files found  : $($jsFiles.Count)"

                    if ($htmlFiles.Count -eq 0) {
                        Write-Error "No HTML files found!"
                        exit 1
                    }
                    Write-Host "Lint check passed!"
                '''
            }
        }

        stage('Inject API Key') {
            steps {
                withCredentials([string(credentialsId: 'gemini-api-key', variable: 'GEMINI_KEY')]) {
                    powershell '''
                        Write-Host "Injecting Gemini API key..."
                        $files = Get-ChildItem -Recurse -Filter "*.js"
                        foreach ($file in $files) {
                            $content = Get-Content $file.FullName -Raw
                            $content = $content -replace "YOUR_GEMINI_API_KEY", $env:GEMINI_KEY
                            Set-Content $file.FullName $content
                        }
                        Write-Host "API key injected successfully!"
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                powershell '''
                    $dest = "C:\\deployments\\chatbot-ai"

                    if (!(Test-Path $dest)) {
                        New-Item -ItemType Directory -Path $dest -Force
                        Write-Host "Created deployment folder: $dest"
                    }

                    Copy-Item -Path ".\\*" -Destination $dest -Recurse -Force -Exclude @(".git")
                    Write-Host "All files copied to $dest"
                    Write-Host "Chatbot AI deployed successfully!"
                    Write-Host "Open $dest\\index.html in your browser to run"
                '''
            }
        }
    }

    post {
        success {
            echo 'Chatbot AI deployed successfully!'
        }
        failure {
            echo 'Build failed - check Console Output for details!'
        }
        always {
            cleanWs()
            echo 'Workspace cleaned!'
        }
    }
}
