 import { ConnectEmbed,useShowConnectEmbed } from "@thirdweb-dev/react"

const loginOptional=false;

const Login = () => {
  const showConnectEmbed = useShowConnectEmbed();


  return (
    <div>
      <h1>Login</h1>
      {showConnectEmbed ? (
      <ConnectEmbed
          auth={{
            loginOptional,
          }}
      />):(
        <p>Signing In ....</p>
      )}
    </div>
  )
}

export default Login
