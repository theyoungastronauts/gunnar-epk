import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

const Wrapper = (props: Props) => {
    return (

        <div className={'wrapper'}>
            {props.children}
        </div>
    )
}

export default Wrapper
