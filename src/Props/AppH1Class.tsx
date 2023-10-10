import { PureComponent } from "react";

type Props = { text: string };

class AppH1Class extends PureComponent<Props> {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

export default AppH1Class;
