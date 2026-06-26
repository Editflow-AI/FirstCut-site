import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FirstCut",
  description: "Privacy Policy for FirstCut iOS and Mac.",
};

const contactEmail = "editflow.ai.official@gmail.com";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-gray-500 hover:text-black"
        >
          FirstCut
        </Link>

        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 27, 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-7 text-gray-700">
            <section>
              <p>
                FirstCut is a lightweight video rough cut utility for iPhone
                and Mac.
              </p>
              <p className="mt-4">
                This Privacy Policy explains how FirstCut handles user data.
              </p>
            </section>

            <PolicySection title="Data Collection">
              <p>FirstCut does not collect personal information.</p>
              <p>
                The app does not require you to create an account, sign in, or
                provide personal details such as your name, email address, or
                phone number.
              </p>
            </PolicySection>

            <PolicySection title="Video Processing">
              <p>FirstCut processes videos locally on your device.</p>
              <p>
                When you select a video from Photos or Files, the app may
                temporarily copy the selected video into a local working area on
                your device in order to analyze silent sections and export a
                rough cut video.
              </p>
              <p>Your videos are not uploaded to our servers.</p>
            </PolicySection>

            <PolicySection title="Network Transmission">
              <p>
                FirstCut does not send your videos, audio, analysis results, or
                exported files to any external server.
              </p>
            </PolicySection>

            <PolicySection title="Temporary Files">
              <p>
                FirstCut may create temporary local files while importing,
                analyzing, previewing, or exporting a video.
              </p>
              <p>
                You can remove temporary files from within the app when cleanup
                options are shown.
              </p>
            </PolicySection>

            <PolicySection title="Photos Access">
              <p>
                FirstCut may request access to Photos only when you choose to
                select a video from your library or save an exported video to
                Photos.
              </p>
              <p>The app uses this access only for the action you choose.</p>
            </PolicySection>

            <PolicySection title="Files Access">
              <p>
                FirstCut may allow you to select a video from the Files app.
              </p>
              <p>
                The selected file is used only for local processing inside the
                app.
              </p>
            </PolicySection>

            <PolicySection title="Analytics and Tracking">
              <p>FirstCut does not use third-party analytics tools.</p>
              <p>FirstCut does not track you across apps or websites.</p>
              <p>FirstCut does not display ads.</p>
            </PolicySection>

            <PolicySection title="Children's Privacy">
              <p>
                FirstCut does not knowingly collect personal information from
                children.
              </p>
            </PolicySection>

            <PolicySection title="Changes to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time.</p>
              <p>
                If we make changes, we will update the &quot;Last updated&quot;
                date at the top of this page.
              </p>
            </PolicySection>

            <PolicySection title="Contact">
              <p>
                If you have any questions about this Privacy Policy or FirstCut,
                please contact us at:
              </p>
              <p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-black underline underline-offset-4"
                >
                  {contactEmail}
                </a>
              </p>
            </PolicySection>
          </div>
        </section>

        <section lang="ja" className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            プライバシーポリシー
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            最終更新日：2026年6月27日
          </p>

          <div className="mt-10 space-y-8 text-base leading-8 text-gray-700">
            <section>
              <p>
                FirstCutは、iPhoneおよびMac向けの軽量なラフカット作成ツールです。
              </p>
              <p className="mt-4">
                本プライバシーポリシーでは、FirstCutにおけるユーザー情報の取り扱いについて説明します。
              </p>
            </section>

            <PolicySection title="取得する情報">
              <p>FirstCutは、個人情報を収集しません。</p>
              <p>
                本アプリでは、アカウント作成、ログイン、氏名、メールアドレス、電話番号などの個人情報の入力は必要ありません。
              </p>
            </PolicySection>

            <PolicySection title="動画の処理について">
              <p>FirstCutは、動画を端末上でローカル処理します。</p>
              <p>
                ユーザーが写真またはファイルから動画を選択すると、無音区間の解析やラフカット動画の書き出しを行うために、選択された動画を端末内の一時作業領域へコピーする場合があります。
              </p>
              <p>
                選択された動画が外部サーバーへアップロードされることはありません。
              </p>
            </PolicySection>

            <PolicySection title="外部送信について">
              <p>
                FirstCutは、動画、音声、解析結果、書き出したファイルを外部サーバーへ送信しません。
              </p>
            </PolicySection>

            <PolicySection title="一時ファイルについて">
              <p>
                FirstCutは、動画の取り込み、解析、プレビュー、書き出しのために、一時的なローカルファイルを作成する場合があります。
              </p>
              <p>
                アプリ内に一時ファイル削除の操作が表示されている場合、ユーザーはそれを使って一時ファイルを削除できます。
              </p>
            </PolicySection>

            <PolicySection title="写真へのアクセス">
              <p>
                FirstCutは、ユーザーが写真ライブラリから動画を選択する場合、または書き出した動画を写真に保存する場合にのみ、写真へのアクセスを求めることがあります。
              </p>
              <p>
                このアクセスは、ユーザーが選択した操作のためだけに使用されます。
              </p>
            </PolicySection>

            <PolicySection title="ファイルへのアクセス">
              <p>
                FirstCutは、ユーザーがファイルアプリから動画を選択できる機能を提供する場合があります。
              </p>
              <p>
                選択されたファイルは、アプリ内でのローカル処理にのみ使用されます。
              </p>
            </PolicySection>

            <PolicySection title="解析・広告・トラッキング">
              <p>FirstCutは、第三者のアクセス解析ツールを使用しません。</p>
              <p>
                FirstCutは、他のアプリやWebサイトをまたいだトラッキングを行いません。
              </p>
              <p>FirstCutは、広告を表示しません。</p>
            </PolicySection>

            <PolicySection title="子どものプライバシー">
              <p>
                FirstCutは、子どもから個人情報を意図的に収集することはありません。
              </p>
            </PolicySection>

            <PolicySection title="プライバシーポリシーの変更">
              <p>
                本プライバシーポリシーは、必要に応じて変更される場合があります。
              </p>
              <p>
                変更があった場合は、本ページ上部の「最終更新日」を更新します。
              </p>
            </PolicySection>

            <PolicySection title="お問い合わせ">
              <p>
                本プライバシーポリシーまたはFirstCutに関するお問い合わせは、以下までご連絡ください。
              </p>
              <p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-black underline underline-offset-4"
                >
                  {contactEmail}
                </a>
              </p>
            </PolicySection>
          </div>
        </section>
      </article>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h3 className="mb-3 text-xl font-semibold text-black">{title}</h3>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
