import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

function BookIcon(props: Props) {
  <Svg viewBox="0 0 16 20" width={props.size} height={props.size}>
    <Path
      d="M3.41666 1.6665H14.6667V18.3332H3.41666C2.86413 18.3332 2.33422 18.1137 1.94352 17.723C1.55282 17.3323 1.33333 16.8024 1.33333 16.2498V3.74984C1.33333 3.1973 1.55282 2.6674 1.94352 2.2767C2.33422 1.886 2.86413 1.6665 3.41666 1.6665V1.6665Z"
      stroke="#52ABE3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>;
}

export default BookIcon;
