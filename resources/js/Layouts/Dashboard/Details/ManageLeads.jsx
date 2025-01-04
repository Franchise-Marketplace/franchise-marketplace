export default function ManageLeads() {
    const leads = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '555-1234',
            franchise: 'Franchise A',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            phone: '555-5678',
            franchise: 'Franchise B',
        },
    ];

    return (
        <div className="rounded-md bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-500">Manage Leads</h2>
            <ul className="mt-6 space-y-4">
                {leads.map((lead) => (
                    <li
                        key={lead.id}
                        className="rounded border border-gray-300 p-4"
                    >
                        <h3 className="text-xl font-semibold">{lead.name}</h3>
                        <p>
                            <strong>Email:</strong> {lead.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {lead.phone}
                        </p>
                        <p>
                            <strong>Interested in:</strong> {lead.franchise}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
