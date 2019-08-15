import * as AlipayRemax from 'remax/alipay';
import * as WechatRemax from 'remax/wechat';
import { Platform } from 'remax';

export default function Text(props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayRemax.Text {...props} />;
    case 'wechat':
    default:
      return <WechatRemax.Text {...props} />;
  }
}
