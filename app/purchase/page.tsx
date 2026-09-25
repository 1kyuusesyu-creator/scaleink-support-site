import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "ScaleInk プランと購入条件",
  description:
    "ScaleInkの月額・年額プランと買い切りプランの違い、購入・管理・利用規約について説明します。",
  alternates: { canonical: new URL("/purchase", SITE_URL).toString() },
};

const TERMS_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export default function PurchasePage() {
  return (
    <div className="content" lang="ja">
      <h1>プランと購入条件</h1>

      <h2>月額・年額プラン</h2>
      <p>月額・年額プランは自動更新サブスクリプションです。契約期間中、ScaleInk Pro機能を利用できます。将来、クラウド連携など継続的なオンラインサービスを提供する場合、サブスクリプションの対象となることがあります。</p>

      <h2>買い切りプラン</h2>
      <p>買い切りプランは、一度の購入で、端末上で提供されるScaleInk Pro機能を期限なく利用できる非消耗型のアプリ内課金です。将来提供されるクラウド同期、共同編集、オンラインストレージなど、継続的な運用コストを伴うオンラインサービスは、明示されない限り含まれません。</p>

      <h2>購入と管理</h2>
      <p>購入はAppleのApp Storeを通じて処理されます。月額・年額プランの管理や解約は、Apple Accountのサブスクリプション設定から行えます。同じApple Accountで購入した権利は、アプリ内の「購入を復元」から復元できます。</p>

      <h2>利用規約</h2>
      <p>ScaleInkには<a href={TERMS_URL} target="_blank" rel="noreferrer">Apple標準利用許諾契約</a>が適用されます。</p>
    </div>
  );
}
