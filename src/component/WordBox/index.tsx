import React, { createRef, PureComponent, Ref } from "react";

export interface IWordBoxProps {
  getRef: (ref: Ref<HTMLInputElement>) => void;
  text: string;
  onCorrect: () => void;
  disabled?: boolean;
}

export interface IWordBoxState {
  value: string;
  correct: boolean;
}

export default class WordBox extends PureComponent<
  IWordBoxProps,
  IWordBoxState
> {
  private ref: Ref<HTMLInputElement>;

  public constructor(props: IWordBoxProps) {
    super(props);
    this.ref = createRef();
    this.state = { value: "", correct: false };
  }

  public componentDidMount(): void {
    this.props.getRef(this.ref);
  }

  public componentDidUpdate(
    prevProps: Readonly<IWordBoxProps>,
    prevState: Readonly<IWordBoxState>,
    snapshot?: any
  ): void {
    this.props.getRef(this.ref);
  }

  public render(): React.ReactNode {
    const { text, onCorrect, disabled } = this.props;
    const { value, correct } = this.state;
    return (
      <div style={{ display: "inline-block", marginTop: 20 }}>
        <div
          style={{
            height: 50,
            width: 50,
            fontSize: "24px",
            color: correct ? "red" : "black"
          }}
        >
          {text}
        </div>
        <input
          disabled={disabled}
          value={value}
          onChange={e => {
            const newValue = e.target.value.trim();
            if (newValue === text) {
              this.setState({
                value: newValue,
                correct: true
              });
              onCorrect();
            } else {
              this.setState({
                value: newValue,
                correct: false
              });
            }
          }}
          ref={this.ref}
          style={{
            height: 50,
            width: 50,
            fontSize: "24px",
            textAlign: "center"
          }}
        />
      </div>
    );
  }
}
