declare module kotlin {
  export module jvm {
    export module functions {
      export interface Function1<T, R> {
        invoke(p1: T): R;
      }

      export interface Function2<T, T2, R> {
        invoke(p1: T, p2: T2): R;
      }

      export interface Function3<T, T2, T3, R> {
        invoke(p1: T, p2: T2, p3: T3): R;
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module supabase {
      export class SupabaseAuth {
        public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth>;
        public addOnAuthStateChange(job: kotlin.jvm.functions.Function1<org.nativescript.supabase.SupabaseAuth.AuthChangeEvent, java.lang.Void>): org.nativescript.supabase.SupabaseAuth.SupabaseListener;
        public stopAutoRefresh(): void;
        public getAuth(): io.github.jan.supabase.auth.Auth;
        public signIn(email: string, password: string, captchaToken: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public userIdentities(): java.util.List<io.github.jan.supabase.auth.user.Identity>;
        public signInWithSSOWithProviderId(providerId: string, redirectTo: string, captchaToken: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public setSession(accessToken: string, refreshToken: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public signInWithPhone(phone: string, password: string, captchaToken: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public resend(phone: string, type: org.nativescript.supabase.SupabaseAuth.ResendMobileType, captchaToken: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public constructor(auth: io.github.jan.supabase.auth.Auth);
        public refreshSession(refreshToken: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public signInAnonymously(data: string, captchaToken: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public update(user: org.nativescript.supabase.SupabaseAuth.UserAttributes, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public signInWithIdToken(credentialsProvider: org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentials, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public signOut(scope: org.nativescript.supabase.SupabaseAuth.SignOutScope, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public getCurrentSession(): io.github.jan.supabase.auth.user.UserSession;
        public getCurrentUser(): io.github.jan.supabase.auth.user.UserInfo;
        public verifyOTP(tokenHash: string, type: org.nativescript.supabase.SupabaseAuth.EmailOTPType, captchaToken: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public signInWithSSO(domain: string, redirectTo: string, captchaToken: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public startAutoRefresh(): void;
        public exchangeCodeForSession(authCode: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public signInWithOTPPhone(phone: string, shouldCreateUser: java.lang.Boolean, data: string, captchaToken: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public getAdmin(): org.nativescript.supabase.SupabaseAuthAdmin;
        public signInWithOTP(email: string, redirectTo: string, shouldCreateUser: java.lang.Boolean, data: string, captchaToken: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public resend(email: string, type: org.nativescript.supabase.SupabaseAuth.ResendEmailType, emailRedirectTo: string, captchaToken: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public linkIdentity(provider: org.nativescript.supabase.SupabaseAuth.Provider, scopes: string, redirectTo: string, queryParams: java.util.Map<string, string>, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public signUp(email: string, password: string, data: string, captchaToken: string, redirectTo: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public reauthenticate(callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public signInWithOAuth(provider: org.nativescript.supabase.SupabaseAuth.Provider, redirectTo: string, scopes: string, queryParams: java.util.Map<string, string>, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public resetPasswordForEmail(email: string, redirectTo: string, captchaToken: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public verifyOTP(phone: string, token: string, type: org.nativescript.supabase.SupabaseAuth.MobileOTPType, captchaToken: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public signOut(callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public getSession(callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public verifyOTPEmail(email: string, token: string, type: org.nativescript.supabase.SupabaseAuth.EmailOTPType, captchaToken: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public unlinkIdentity(value: io.github.jan.supabase.auth.user.Identity, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public getOAuthSignInURL(provider: org.nativescript.supabase.SupabaseAuth.Provider, scopes: string, redirectTo: string, queryParams: java.util.Map<string, string>, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public signUpPhone(phone: string, password: string, data: string, captchaToken: string, redirectTo: string, callback: kotlin.jvm.functions.Function3<any, any, any, java.lang.Void>): void;
        public user(jwt: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
      }
      export module SupabaseAuth {
        export class AuthChangeEvent {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.AuthChangeEvent>;
          public static initialSession: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static passwordRecovery: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static signedIn: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static signedOut: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static tokenRefreshed: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static userUpdated: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static userDeleted: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static mfaChallengeVerified: org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.AuthChangeEvent;
          public static getEntries(): any;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.AuthChangeEvent>;
        }
        export class AuthMetaSecurity {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.AuthMetaSecurity>;
          public setCaptchaToken(value: string): void;
          public getCaptchaToken(): string;
          public constructor(captchaToken: string);
        }
        export class EmailOTPType {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.EmailOTPType>;
          public static signup: org.nativescript.supabase.SupabaseAuth.EmailOTPType;
          public static invite: org.nativescript.supabase.SupabaseAuth.EmailOTPType;
          public static magiclink: org.nativescript.supabase.SupabaseAuth.EmailOTPType;
          public static recovery: org.nativescript.supabase.SupabaseAuth.EmailOTPType;
          public static emailChange: org.nativescript.supabase.SupabaseAuth.EmailOTPType;
          public static email: org.nativescript.supabase.SupabaseAuth.EmailOTPType;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.EmailOTPType;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.EmailOTPType>;
          public static getEntries(): any;
          public getValue(): io.github.jan.supabase.auth.OtpType.Email;
        }
        export module EmailOTPType {
          export class WhenMappings {
            public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.EmailOTPType.WhenMappings>;
          }
        }
        export class MobileOTPType {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.MobileOTPType>;
          public static sms: org.nativescript.supabase.SupabaseAuth.MobileOTPType;
          public static phoneChange: org.nativescript.supabase.SupabaseAuth.MobileOTPType;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.MobileOTPType;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.MobileOTPType>;
          public static getEntries(): any;
          public getValue(): io.github.jan.supabase.auth.OtpType.Phone;
        }
        export module MobileOTPType {
          export class WhenMappings {
            public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.MobileOTPType.WhenMappings>;
          }
        }
        export class OpenIDConnectCredentials {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentials>;
          public getIdToken(): string;
          public constructor(provider: org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider, idToken: string);
          public getNonce(): string;
          public setAccessToken(value: string): void;
          public setProvider(value: org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider): void;
          public setIdToken(value: string): void;
          public setNonce(value: string): void;
          public getProvider(): org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider;
          public setGotrueMetaSecurity(value: org.nativescript.supabase.SupabaseAuth.AuthMetaSecurity): void;
          public getAccessToken(): string;
          public getGotrueMetaSecurity(): org.nativescript.supabase.SupabaseAuth.AuthMetaSecurity;
        }
        export class OpenIDConnectCredentialsProvider {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider>;
          public static google: org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider;
          public static apple: org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider;
          public static azure: org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider;
          public static facebook: org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider>;
          public getProvider(): io.github.jan.supabase.auth.providers.IDTokenProvider;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider;
          public static getEntries(): any;
        }
        export module OpenIDConnectCredentialsProvider {
          export class WhenMappings {
            public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.WhenMappings>;
          }
        }
        export class Provider {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.Provider>;
          public static apple: org.nativescript.supabase.SupabaseAuth.Provider;
          public static azure: org.nativescript.supabase.SupabaseAuth.Provider;
          public static bitbucket: org.nativescript.supabase.SupabaseAuth.Provider;
          public static discord: org.nativescript.supabase.SupabaseAuth.Provider;
          public static facebook: org.nativescript.supabase.SupabaseAuth.Provider;
          public static figma: org.nativescript.supabase.SupabaseAuth.Provider;
          public static github: org.nativescript.supabase.SupabaseAuth.Provider;
          public static gitlab: org.nativescript.supabase.SupabaseAuth.Provider;
          public static google: org.nativescript.supabase.SupabaseAuth.Provider;
          public static kakao: org.nativescript.supabase.SupabaseAuth.Provider;
          public static keycloak: org.nativescript.supabase.SupabaseAuth.Provider;
          public static linkedin: org.nativescript.supabase.SupabaseAuth.Provider;
          public static linkedinOIDC: org.nativescript.supabase.SupabaseAuth.Provider;
          public static notion: org.nativescript.supabase.SupabaseAuth.Provider;
          public static slack: org.nativescript.supabase.SupabaseAuth.Provider;
          public static slackOIDC: org.nativescript.supabase.SupabaseAuth.Provider;
          public static spotify: org.nativescript.supabase.SupabaseAuth.Provider;
          public static twitch: org.nativescript.supabase.SupabaseAuth.Provider;
          public static twitter: org.nativescript.supabase.SupabaseAuth.Provider;
          public static workos: org.nativescript.supabase.SupabaseAuth.Provider;
          public static zoom: org.nativescript.supabase.SupabaseAuth.Provider;
          public static fly: org.nativescript.supabase.SupabaseAuth.Provider;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.Provider>;
          public static getEntries(): any;
          public getProvider(): io.github.jan.supabase.auth.providers.OAuthProvider;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.Provider;
        }
        export module Provider {
          export class WhenMappings {
            public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.Provider.WhenMappings>;
          }
        }
        export class ResendEmailType {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.ResendEmailType>;
          public static signup: org.nativescript.supabase.SupabaseAuth.ResendEmailType;
          public static emailChange: org.nativescript.supabase.SupabaseAuth.ResendEmailType;
          public static getEntries(): any;
          public getType(): io.github.jan.supabase.auth.OtpType.Email;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.ResendEmailType>;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.ResendEmailType;
        }
        export module ResendEmailType {
          export class WhenMappings {
            public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.ResendEmailType.WhenMappings>;
          }
        }
        export class ResendMobileType {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.ResendMobileType>;
          public static sms: org.nativescript.supabase.SupabaseAuth.ResendMobileType;
          public static phoneChange: org.nativescript.supabase.SupabaseAuth.ResendMobileType;
          public static getEntries(): any;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.ResendMobileType;
          public getType(): io.github.jan.supabase.auth.OtpType.Phone;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.ResendMobileType>;
        }
        export module ResendMobileType {
          export class WhenMappings {
            public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.ResendMobileType.WhenMappings>;
          }
        }
        export class SignOutScope {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.SignOutScope>;
          public static global: org.nativescript.supabase.SupabaseAuth.SignOutScope;
          public static local: org.nativescript.supabase.SupabaseAuth.SignOutScope;
          public static others: org.nativescript.supabase.SupabaseAuth.SignOutScope;
          public static getEntries(): any;
          public getScope(): io.github.jan.supabase.auth.SignOutScope;
          public static valueOf(value: string): org.nativescript.supabase.SupabaseAuth.SignOutScope;
          public static values(): androidNative.Array<org.nativescript.supabase.SupabaseAuth.SignOutScope>;
        }
        export module SignOutScope {
          export class WhenMappings {
            public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.SignOutScope.WhenMappings>;
          }
        }
        export class SupabaseListener {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.SupabaseListener>;
          public setJob$nativescript_supabase_release(value: kotlinx.coroutines.Job): void;
          public constructor();
          public getJob$nativescript_supabase_release(): kotlinx.coroutines.Job;
          public setRemoved$nativescript_supabase_release(value: boolean): void;
          public getRemoved$nativescript_supabase_release(): boolean;
          public constructor(job: kotlinx.coroutines.Job);
          public remove(): void;
        }
        export class UserAttributes {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuth.UserAttributes>;
          public constructor();
          public getNonce(): string;
          public getEmail(): string;
          public getPassword(): string;
          public setData(value: string): void;
          public getPhone(): string;
          /** @deprecated */
          public setEmailChangeToken(value: string): void;
          public setPhone(value: string): void;
          /** @deprecated */
          public getEmailChangeToken(): string;
          public getData(): string;
          public setPassword(value: string): void;
          public setNonce(value: string): void;
          public setEmail(value: string): void;
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module supabase {
      export class SupabaseAuthAdmin {
        public static class: java.lang.Class<org.nativescript.supabase.SupabaseAuthAdmin>;
        public constructor(adminApi: io.github.jan.supabase.auth.admin.AdminApi);
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module supabase {
      export class SupabaseChannel {
        public static class: java.lang.Class<org.nativescript.supabase.SupabaseChannel>;
        public subscribe(callback: any): void;
        public onPresenceChange(event: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public unsubscribe(callback: any): void;
        public broadcast(event: string, message: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public untrack(callback: any): void;
        public onPostgresChange(event: string, scheme: string, table: string, filter: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public onBroadcast(event: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public constructor(channel: io.github.jan.supabase.realtime.RealtimeChannel);
      }
      export module SupabaseChannel {
        export class Companion {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseChannel.Companion>;
          public getFilterRegex(): any;
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module supabase {
      export class SupabaseClient {
        public static class: java.lang.Class<org.nativescript.supabase.SupabaseClient>;
        public getFunctions(): org.nativescript.supabase.SupabaseFunctions;
        public channel(internal_value: string): org.nativescript.supabase.SupabaseChannel;
        public schema(schema: string): void;
        public static createClient(supabaseUrl: string, supabaseKey: string): org.nativescript.supabase.SupabaseClient;
        public getClient(): io.github.jan.supabase.SupabaseClient;
        public getAuth(): org.nativescript.supabase.SupabaseAuth;
        public getStorage(): org.nativescript.supabase.SupabseStorage;
        public constructor($this$client_u24lambda_u240: string, $i$f$createSupabaseClient: string);
        public setClient(value: io.github.jan.supabase.SupabaseClient): void;
        public removeChannel(channel: org.nativescript.supabase.SupabaseChannel): void;
        public removeAllChannels(): void;
        public from(table: string): void;
        public handleURL(intent: globalAndroid.content.Intent): void;
      }
      export module SupabaseClient {
        export class Companion {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseClient.Companion>;
          public createClient(supabaseUrl: string, supabaseKey: string): org.nativescript.supabase.SupabaseClient;
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module supabase {
      export class SupabaseFunctions {
        public static class: java.lang.Class<org.nativescript.supabase.SupabaseFunctions>;
        public constructor(functions: io.github.jan.supabase.functions.Functions);
        public invoke(functionName: string, options: org.nativescript.supabase.SupabaseFunctions.InvokeOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
      }
      export module SupabaseFunctions {
        export class InvokeOptions {
          public static class: java.lang.Class<org.nativescript.supabase.SupabaseFunctions.InvokeOptions>;
          public constructor();
          public constructor(this_$iv: string);
          public set_method$nativescript_supabase_release(value: io.ktor.http.HttpMethod): void;
          public getHeaders(): java.util.Map<string, string>;
          public getFileBody(): java.nio.ByteBuffer;
          public get_method$nativescript_supabase_release(): io.ktor.http.HttpMethod;
          public getMethod(): string;
          public setJsonBody(value: kotlinx.serialization.json.JsonObject): void;
          public setFileBody(value: java.nio.ByteBuffer): void;
          public setMethod(value: string): void;
          public setHeaders(value: java.util.Map<string, string>): void;
          public constructor(fileBody: java.nio.ByteBuffer);
          public getJsonBody(): kotlinx.serialization.json.JsonObject;
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module supabase {
      export class SupabasePostgresClient {
        public static class: java.lang.Class<org.nativescript.supabase.SupabasePostgresClient>;
        public schema(): void;
        public constructor(postgres: io.github.jan.supabase.postgrest.Postgrest);
        public from(): void;
        public getPostgres(): io.github.jan.supabase.postgrest.Postgrest;
        public rpc(): void;
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module supabase {
      export class SupabseStorage {
        public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage>;
        public deleteBucket(id: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public createBucket(id: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public updateBucket(id: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public getBucket(id: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public emptyBucket(id: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public createBucket(id: string, options: org.nativescript.supabase.SupabseStorage.BucketOptions, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public listBuckets(id: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
        public updateBucket(id: string, options: org.nativescript.supabase.SupabseStorage.BucketOptions, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        public constructor(storage: io.github.jan.supabase.storage.Storage);
        public from(id: string): org.nativescript.supabase.SupabseStorage.FileApi;
      }
      export module SupabseStorage {
        export class BucketOptions {
          public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage.BucketOptions>;
          public setFileSizeLimit(value: string): void;
          public setAllowedMimeTypes(value: androidNative.Array<string>): void;
          public constructor();
          public getFileSizeLimit(): string;
          public setPublic(value: boolean): void;
          public getPublic(): boolean;
          public getAllowedMimeTypes(): androidNative.Array<string>;
        }
        export class Companion {
          public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage.Companion>;
          public extractValue(value: string): android.util.Pair<java.lang.Integer, string>;
        }
        export class FileApi {
          public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage.FileApi>;
          public list(path: string, options: org.nativescript.supabase.SupabseStorage.FileApi.SearchOptions, callback: kotlin.jvm.functions.Function2<java.util.List<io.github.jan.supabase.storage.FileObject>, any, java.lang.Void>): void;
          public uploadToSignedUrl(path: string, token: string, data: androidNative.Array<number>, options: org.nativescript.supabase.SupabseStorage.FileApi.FileOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public update(path: string, file: java.io.File, options: org.nativescript.supabase.SupabseStorage.FileApi.FileOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public upload(path: string, file: java.io.File, options: org.nativescript.supabase.SupabseStorage.FileApi.FileOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public update(path: string, data: androidNative.Array<number>, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public update(path: string, data: androidNative.Array<number>, options: org.nativescript.supabase.SupabseStorage.FileApi.FileOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public remove(paths: androidNative.Array<string>, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public upload(path: string, file: java.io.File, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public update(path: string, data: java.nio.ByteBuffer, options: org.nativescript.supabase.SupabseStorage.FileApi.FileOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public copy(fromPath: string, toPath: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public download(path: string, options: org.nativescript.supabase.SupabseStorage.FileApi.TransformOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public update(path: string, file: java.io.File, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public createSignedUrls(paths: androidNative.Array<string>, expiresIn: number, download: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public createSignedUploadUrl(path: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public createSignedUrl(path: string, expiresIn: number, download: string, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public upload(path: string, data: androidNative.Array<number>, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public upload(path: string, data: java.nio.ByteBuffer, options: org.nativescript.supabase.SupabseStorage.FileApi.FileOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public constructor(api: io.github.jan.supabase.storage.BucketApi);
          public upload(path: string, data: java.nio.ByteBuffer, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public getPublicUrl(this_: string, path: string, download: org.nativescript.supabase.SupabseStorage.FileApi.TransformOptions): string;
          public update(path: string, data: java.nio.ByteBuffer, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public getPublicUrl(path: string, download: string): string;
          public upload(path: string, data: androidNative.Array<number>, options: org.nativescript.supabase.SupabseStorage.FileApi.FileOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public createSignedUrl(path: string, expiresIn: number, download: string, options: org.nativescript.supabase.SupabseStorage.FileApi.TransformOptions, callback: kotlin.jvm.functions.Function2<any, any, java.lang.Void>): void;
          public move(fromPath: string, toPath: string, callback: kotlin.jvm.functions.Function1<any, java.lang.Void>): void;
        }
        export module FileApi {
          export class FileOptions {
            public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage.FileApi.FileOptions>;
            public constructor();
            public setCacheControl(value: string): void;
            public getCacheControl(): string;
            public getHeaders(): java.util.Map<string, string>;
            public setMeta(this_$iv: string): void;
            public getMetadata(): kotlinx.serialization.json.JsonObject;
            public setUpsert(value: boolean): void;
            public getDuplex(): string;
            public setContentType(value: string): void;
            public setHeaders(value: java.util.Map<string, string>): void;
            public setDuplex(value: string): void;
            public getContentType(): string;
            public getUpsert(): boolean;
            public setMetadata(value: kotlinx.serialization.json.JsonObject): void;
          }
          export class SearchOptions {
            public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage.FileApi.SearchOptions>;
            public constructor();
            public setLimit(value: java.lang.Integer): void;
            public getOffset(): java.lang.Integer;
            public setSortBy(value: org.nativescript.supabase.SupabseStorage.FileApi.SortBy): void;
            public getSearch(): string;
            public getSortBy(): org.nativescript.supabase.SupabseStorage.FileApi.SortBy;
            public getLimit(): java.lang.Integer;
            public setOffset(value: java.lang.Integer): void;
            public setSearch(value: string): void;
          }
          export class SortBy {
            public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage.FileApi.SortBy>;
            public constructor();
            public getOrder(): string;
            public setOrder(value: string): void;
            public setColumn(value: string): void;
            public getColumn(): string;
          }
          export class TransformOptions {
            public static class: java.lang.Class<org.nativescript.supabase.SupabseStorage.FileApi.TransformOptions>;
            public constructor();
            public getFormat(): string;
            public getHeight(): java.lang.Integer;
            public setHeight(value: java.lang.Integer): void;
            public setFormat(value: string): void;
            public getResize(): string;
            public setWidth(value: java.lang.Integer): void;
            public getWidth(): java.lang.Integer;
            public setResize(value: string): void;
            public getQuality(): java.lang.Integer;
            public setQuality(value: java.lang.Integer): void;
          }
        }
      }
    }
  }
}

//Generics information:
