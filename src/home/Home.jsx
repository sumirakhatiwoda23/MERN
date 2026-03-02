import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

const users = [
  {
    id: 1,
    name: "Rabin Shrestha",
    email: "rabin@example.com",
    role: "admin",
    isActive: true,
    skills: ["JavaScript", "Flutter", "MongoDB"]
  },
  {
    id: 2,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    role: "user",
    isActive: true,
    skills: ["React", "Node.js"]
  },
  {
    id: 3,
    name: "Anita Rai",
    email: "anita.rai@example.com",
    role: "editor",
    isActive: false,
    skills: ["Content Writing", "SEO", "Editing"]
  }
];

export default function Home() {
  return (
    <div className="p-5 space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="border p-4 rounded-xl space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm">Role: {user.role}</p>
              </div>
            </div>

            <span
              className={`px-2 py-1 text-xs rounded ${
                user.isActive ? "bg-green-200" : "bg-red-200"
              }`}
            >
              {user.isActive ? "Active" : "Inactive"}
            </span>
          </div>

          {/* skills list */}
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-200 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}