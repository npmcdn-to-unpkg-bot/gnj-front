export class LoginInfo {
    constructor(private Status:string, 
            private TokenProvider:string, 
            private IdClientProvider:string, 
            private ExpiresInProvider:string, 
            private Email:string,
            private FirstName:string, 
            private LastName:string, 
            private Provider:string, 
            private TokenGnj:string,
            private ExpiresInGnj:string) {}
}