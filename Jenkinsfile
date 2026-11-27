
pipeline {
    agent any

    stages {

        stage('Verify Environment') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('C:\\Users\\GR0002TU\\OneDrive\\Desktop\\Playwright_JavaScript_2026') {
                    bat 'npm ci'
                }
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                dir('C:\\Users\\GR0002TU\\OneDrive\\Desktop\\Playwright_JavaScript_2026') {
                    bat 'npx playwright install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                dir('C:\\Users\\GR0002TU\\OneDrive\\Desktop\\Playwright_JavaScript_2026') {
                    bat 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            dir('C:\\Users\\GR0002TU\\OneDrive\\Desktop\\Playwright_JavaScript_2026') {
                junit testResults: 'test-results/junit-report.xml',
                      allowEmptyResults: true

                archiveArtifacts artifacts: 'playwright-report/**, allure-results/**',
                                 allowEmptyArchive: true
            }
        }
    }
}
