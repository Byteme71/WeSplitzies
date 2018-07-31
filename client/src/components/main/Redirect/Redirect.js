import { push } from 'react'

export function redirectToLogin() {  
    return (dispatch: (action: actionType) => void) => {
      dispatch(push('/login'));
    };
}