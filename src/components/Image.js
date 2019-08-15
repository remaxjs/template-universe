import * as AlipayRemax from 'remax/alipay';
import * as WechatRemax from 'remax/wechat';
import { Platform } from 'remax';

export default function Image(props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayRemax.Image {...props} />;
    case 'wechat':
    default:
      return <WechatRemax.Image {...props} />;
  }
}
t;
