import * as AlipayRemax from 'remax/alipay';
import * as WechatRemax from 'remax/wechat';
import { Platform } from 'remax';

export default function Image(props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayRemax.View {...props} />;
    case 'wechat':
    default:
      return <WechatRemax.View {...props} />;
  }
}
