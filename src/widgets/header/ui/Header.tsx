import Link from "next/link";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const Header = () => {
  return (
    <header>
      <nav className="w-full h-16 flex items-center justify-between space-x-8">
        <Input
          placeholder="Поиск по словам и переводам..."
          prefix={<SearchOutlined className="text-gray-400 mr-1" />}
          className="!rounded-xl"
          allowClear
        />

        <Link
          href="/login"
          className="border border-gray-400 duration-100 rounded-sm p-3"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 stroke-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
};
