import type {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import type {LocationQueryValue} from 'vue-router';
import { UserResource } from '../../domains/users/types';

export type RequestMiddleware = (request: AxiosRequestConfig) => void;
export type ResponseMiddleware = (response: AxiosResponse) => void;
export type ResponseErrorMiddleware = (error: AxiosError) => void;

export type LoggedInUser = UserResource;

export type InvitedUser = Pick<Required<RegisterData>, 'id' | 'firstName' | 'lastName' | 'email'>;

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface ResetPasswordData {
    password: string;
    repeatPassword: string;
    resetPasswordToken: LocationQueryValue | LocationQueryValue[];
}

export interface RegisterData {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    inviteToken: LocationQueryValue | LocationQueryValue[];
}
