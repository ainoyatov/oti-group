// import { Icon } from '@iconify/react';

// export default function BenefitsSection() {
//   const leftItems = [
//     "We buy properties in any condition",
//     "Get an offer within 72 hours",
//     "Quick and easy sale",
//     "Personalised service",
//     "Receive a free home evaluation",
//   ];

//   const rightItems = [
//     "No repairs or cleaning required",
//     "No obligations",
//     "No listings or for sale boards",
//     "No waiting months for a buyer",
//     "No fees or commissions charged",
//   ];

//   return (
//     <div className="flex flex-col p-4 md:flex-row md:justify-center gap-4 xl:gap-8 py-8">
      
//       {/* Left Column */}
//       <div className="flex flex-col text-lg md:text-lg md:font-thin p-6 bg-blue-100 rounded-lg shadow-md w-full max-w-md">
//         {leftItems.map((text, idx) => (
//           <div
//             key={idx}
//             className="flex flex-row space-x-4 py-4 items-start border-b-2 last:border-b-0"
//           >
//             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white flex-shrink-0">
//               <Icon icon="game-icons:check-mark" width={20} height={20} color="white" />
//             </div>
//             <p className="text-base w-[250px]">{text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Right Column */}
//       <div className="flex flex-col text-lg md:text-lg md:font-thin p-6 bg-blue-100 rounded-lg shadow-md w-full max-w-md">
//         {rightItems.map((text, idx) => (
//           <div
//             key={idx}
//             className="flex flex-row space-x-4 py-4 items-start border-b-2 last:border-b-0"
//           >
//             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white flex-shrink-0">
//               <Icon icon="dashicons:no-alt" width={20} height={20} color="white" />
//             </div>
//             <p className="text-base w-[250px]">{text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { Icon } from '@iconify/react';

export default function BenefitsSection() {
  const leftItems = [
    "We buy properties in any condition",
    "Get an offer within 72 hours",
    "Quick and easy sale",
    "Personalised service",
    "Receive a free home evaluation",
  ];

  const rightItems = [
    "No repairs or cleaning required",
    "No obligations",
    "No listings or for sale boards",
    "No waiting months for a buyer",
    "No fees or commissions charged",
  ];

  return (
    <div className="flex flex-col p-4 md:flex-row md:justify-center gap-4 xl:gap-8 py-8">
      
      {/* eft Column */}
      <div className="flex flex-col text-lg md:text-lg md:font-thin p-6 rounded-lg shadow-2xl w-full max-w-md">
        {leftItems.map((text, idx) => (
          <div
            key={idx}
            className={`flex flex-row space-x-4 py-4 items-start ${
              idx !== leftItems.length - 1 ? 'border-b-2 border-green-500/50' : ''
            }`}
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/70 text-white flex-shrink-0">
              <Icon icon="game-icons:check-mark" width={12} height={12} color="white" />
            </div>
            <p className="text-base w-[250px] dark:text-gray-500">{text}</p>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col text-lg md:text-lg md:font-thin p-6 rounded-lg shadow-2xl w-full max-w-md">
        {rightItems.map((text, idx) => (
          <div
            key={idx}
            className={`flex flex-row space-x-4 py-4 items-start ${
              idx !== rightItems.length - 1 ? 'border-b-2 border-red-500/50' : ''
            }`}
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/70 text-white flex-shrink-0">
              <Icon icon="dashicons:no-alt" width={12} height={12} color="white" />
            </div>
            <p className="text-base w-[250px] dark:text-gray-500">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}