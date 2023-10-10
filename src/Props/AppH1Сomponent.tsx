import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const AppH1Component: FC<Props> = (props) => <h1> {props.children}</h1>;
export default AppH1Component;
