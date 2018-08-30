export interface AuthenticationServiceInterface {

    login(username: string, password: string)

    logout()
}
