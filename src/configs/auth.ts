import type { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface UserCredentials {
  name: string;
  password: string;
}

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Username", type: "text", placeholder: "Local name" },
        password: {label: "Password", type: "password" }
      },
      authorize: async (credentials: UserCredentials | undefined) => {
        if (!credentials) return null;

        try {
          const response = await fetch('http://localhost:5000/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          if (response.ok) {
            await response.json();
            
            return credentials as unknown as User;
          } else {
            console.error('Server error', response.status);
            // Можно выбрасывать ошибку, если требуется
            throw new Error('Server error: ' + response.status);
          }
        } catch (error) {
          console.error("An error occurred", error);
          // Также можно выбросить ошибку в этом случае
          throw new Error("An error occurred:" + (error as Error).message);
        }
      },
    }),
  ],
};
