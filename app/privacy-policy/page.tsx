import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: '',
    robots: {
      follow: true,
      index: true
    },
}

const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col p-2 md:p-8">
            <div className="text-4xl md:text-5xl text-[#F5B429] font-bold flex w-full justify-center mb-4">Privacy Policy</div>
            <div className="font-bold mb-4">Privacy Policy Updated: 1/1/2025</div>
            <div className="font-bold mb-2">Messaging Privacy Policy</div>
            <div className="mb-2">
                This Messaging Program Privacy Policy explains how OT Investment Group collects 
                and uses information about you in relation to its text message marketing program 
                (the “Messaging Service”). We use a third-party service called Launch Control to 
                provide the Messaging Service to you. For the purposes of the Messaging Service, 
                Launch Control acts as our service provider and data processor of your information.
            </div>
            <div className="font-bold mb-2">
                Collection of Information
            </div>
            <div className="mb-2">
                We collect various information on our behalf from and about you, including information
                you directly provide when you use the Messaging Service. For example, we collect the 
                phone number and email address you provided when signing up for the Messaging Service. 
                When you send messages via the Messaging Service, we will also collect your messaging 
                history and any information included in those messages.
            </div>
            <div className="mb-2">
                We may also collect information about you using cookies or similar technologies. 
                Cookies are pieces of information that are stored by your browser on the hard drive 
                or memory of your device. Cookies enable personalization of your experience on the 
                Messaging Service (e.g., sending you personalized text messages such as shopping cart 
                reminders).
            </div>
            <div className="mb-2">
                If you participate in a contest, sweepstakes, research study, or email survey associated
                with the Messaging Service, we will collect basic contact information and any other 
                information you choose to provide in connection with these activities. We will also 
                collect your contact information if you contact us with questions about the Messaging 
                Service or for customer service.
            </div>
            <div className="font-bold mb-2">Use of Information</div>
            <div className="mb-2">
                We use your information to deliver, analyze, maintain, and support the Messaging Service. 
                We may also use your information to enhance the Messaging Service features and customize and 
                personalize your experiences on the Messaging Service.
            </div>
            <div className="font-bold mb-2">Sharing of Information</div>
            <div className="mb-2">
                We may share, transfer, or disclose your information, if you consent to us doing so, as well as in the following circumstances:
            </div>
            <div className="mb-2">
                Service Providers. We may share your information with third parties to help us provide the Messaging Service to you.
            </div>
            <div className="mb-2">
                Legal Requirement and Protection of OT Investment Group and Others We may disclose your information as we believe 
                such disclosure is necessary or appropriate to: (i) comply with applicable law and legal processes; (ii) respond to 
                requests from public and government authorities, including public and government authorities outside your country of 
                residence; (iii) enforce a contract with us; (iv) protect our rights, privacy, safety, or property, and/or that of our 
                affiliates, you or others; and (v) allow us to pursue available remedies or limit the damages that we may sustain.
            </div>
            <div className="mb-2">
                From time to time, we may share aggregate or de-identified information about the use of the Messaging Service and such 
                aggregated or de-identified information may be shared with any third party, including advertisers, promotional partners, 
                and sponsors.
            </div>
            <div className="mb-2">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. 
                All the above categories exclude text messaging originator opt-in data and consent. This information will not be shared 
                with any third parties.
            </div>
            <div className="font-bold mb-2">
                Protection of Information
            </div>
            <div className="mb-2">
                We take a variety of physical, technical, administrative, and organizational security measures based on the sensitivity 
                of the information we collect to protect your information against accidental or unlawful destruction or accidental loss, 
                alteration, unauthorized disclosure, or access. Unfortunately, no online activity can be guaranteed to be 100% secure. 
                While we strive to protect your information against unauthorized use or disclosure, we cannot ensure or warrant the security 
                of any information you provide. We do not accept liability for unintentional disclosure.
            </div>
            <div className="font-bold mb-2">
                Retention of Information
            </div>
            <div className="mb-2">
                We retain your information for as long as you participate in the Messaging Service or as needed to comply with applicable 
                legal obligations. We will also retain and use your information as necessary to resolve disputes, protect us and our customers, 
                and enforce our agreements.
            </div>
            <div className="font-bold mb-2">Choices and Controls</div>
            <div className="mb-2">
                Consent to receive automated marketing text messages is not a condition of any purchase. You can opt-out of receiving further 
                commercial text messages via the Messaging Service by responding to any of our text messages with any of the following 
                replies: STOP, END, CANCEL, UNSUBSCRIBE, or QUIT.
            </div>
            <div className="font-bold mb-2">Text Message Campaign Data Selling</div>
            <div className="mb-2">
                If you sign up to receive text messages from us, we will not sell Personal Information collected specifically in connection 
                with such service, including your mobile telephone number or consent data, to any third party, and we will not share such 
                Personal Information with any third party for cross-context behavioral advertising or targeted advertising purposes.
            </div>
            <div className="font-bold mb-2">Contact us</div>
            <div className="mb-2">
                If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at vince@otinvestmentsgroup.com
            </div>
            <div className="mb-2">
                OT Investment Group policies are subject to change at any time with or without notice.
            </div>

        </div>
    );
}

export default PrivacyPolicy;