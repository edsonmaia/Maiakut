import React from 'react';
import Link from 'next/link';

const URL_IMG = 'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2018/01/15/';

export default function LogoutScreen() {

    return (
        <>
            <div style={{
                        height: '100vh',
                        margin: 0,
                        fontSize: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                <p>
                <img src={`${URL_IMG}/46dca4477b670b85a177a7fd7c72c237.jpg`} style={{ width: '200px', margin: 'auto' }} /> <br />    
                Você está desconectado(a) do Maiakut, deseja <Link className="boxLink" href="/login">Logar</Link>?
                </p>
            </div>
        </>
    )

}
