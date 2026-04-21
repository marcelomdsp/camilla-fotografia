type Titulo1Props = {
    children: String
    home?: "sim"
}

export const Titulo1 = ({children, home} : Titulo1Props) => {

  
    return (
        <h1 className= {`${home ? "text-4xl lg:text-5xl" : " text-center lg:text-start text-3xl lg:text-4xl text-(--branco)"}`}>
            {children}
        </h1>
    )
}