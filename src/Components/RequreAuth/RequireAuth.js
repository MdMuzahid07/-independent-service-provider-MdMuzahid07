import React from 'react';

const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState();


    return children;
};

export default RequireAuth;