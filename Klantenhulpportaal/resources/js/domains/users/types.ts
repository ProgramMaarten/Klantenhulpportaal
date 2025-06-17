export interface User {    
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_admin: number;
}

// return [
//          'id' => $this->id,
//         'first_name' => $this->first_name,
//         'last_name' => $this->last_name,
//         'email' => $this->email,
//         'email_verified_at' => $this->email_verified_at,
//         'phone_number' =>$this->phone_number,
//         'is_admin' => $this->is_admin,
//         'created_at' => $this->created_at,
//         'updated_at' => $this->updated_at,
//         ];