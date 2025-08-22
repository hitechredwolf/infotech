
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Dummy data (abhi ek hi blog)
    const blog = {
        id: 1,
        title: "Revolutionizing EMI Collections with T-COPS EMI Finance Locker",
        date: "Aug 21, 2025",
        image: "/images/emi-finance-locker.jpg", // tumhari image ka path
        content: `
In today’s fast-paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses. Delays, defaults, and lack of secure tracking often lead to stress and losses. That’s where Red Wolf Info Tech Pvt. Ltd. steps in with its breakthrough solution — T-COPS EMI Finance Locker.

Why T-COPS EMI Finance Locker?

At Red Wolf Info Tech, we believe in empowering businesses with smart technology that makes operations seamless. Our EMI Finance Locker is designed to not only simplify collections but also give lenders complete control and security over financed devices.

With T-COPS EMI Locker, lenders can:
✅ Track device location in real time.
✅ Lock or unlock financed devices online.
✅ Secure the device with camera lock and phone lock.
✅ Reboot devices remotely in case of default.
✅ Manage EMI recovery without stress or manual intervention.

This isn’t just software — it’s a digital shield for your business.

How It Works

When a customer purchases a device on EMI, the T-COPS Finance Locker is integrated into it. If payments are delayed or missed, lenders have the power to:

- Restrict device functionality.
- Send reminders and warnings directly on the phone.
- Lock access until dues are cleared.

Benefits for Businesses

📈 Faster EMI Recovery – Improve cash flow and reduce losses.
🔒 Unmatched Security – Ensure financed devices are always under control.
⚡ Smart Automation – No more chasing defaulters manually.
🌐 Scalable & Reliable – Works across locations and for businesses of all sizes.

Why Choose Red Wolf Info Tech?

With years of expertise in technology-driven business solutions, Red Wolf Info Tech has built trust with partners across industries. Our mission is to make finance secure, simple, and scalable.

The T-COPS EMI Finance Locker is not just a product; it’s a commitment to helping businesses thrive with peace of mind.

Conclusion

If EMI collections have ever been a roadblock for your business, it’s time to switch to a smarter way. With T-COPS EMI Finance Locker by Red Wolf Info Tech, you get technology that puts you back in control — ensuring security, efficiency, and growth.

📞 Contact Us: 9988401333
🌐 Website: www.redwolfinfotech.com
    `,
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
                ← Back
            </button>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-80 object-contain rounded-lg mb-6"
                />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
                <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {blog.content}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
