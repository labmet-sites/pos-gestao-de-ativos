import { TitleStyles } from './TitleStyles';

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <TitleStyles>
      <p className="title-name">{text}</p>
      <div className="title-line"></div>
    </TitleStyles>
  );
}
