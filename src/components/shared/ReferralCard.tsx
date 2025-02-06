'use client';

interface ReferralCardProps {
  referralCode: string;
  referralBonus: number;
}

export default function ReferralCard({ referralCode, referralBonus }: ReferralCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    // Show toast notification
  };

  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold">Refer & Earn</h3>
      <p className="text-sm text-gray-600">
        Share your referral code and earn ₹{referralBonus} when your friend completes their first service!
      </p>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={referralCode}
          readOnly
          className="flex-1 p-2 border rounded-md bg-gray-50"
        />
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Copy
        </button>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => {
            const url = `whatsapp://send?text=Use my referral code ${referralCode} on HelperBuddy`;
            window.open(url, '_blank');
          }}
          className="text-green-600"
        >
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
}
