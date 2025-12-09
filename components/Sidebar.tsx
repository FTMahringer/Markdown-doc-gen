'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/lib/markdown';

interface SidebarProps {
  navigation: NavItem[];
}

function NavItemComponent({ item, level = 0 }: { item: NavItem; level?: number }) {
  const pathname = usePathname();
  const isActive = pathname === item.path || pathname === `/docs${item.path}`;
  
  return (
    <li>
      <Link
        href={`/docs${item.path}`}
        className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
          isActive
            ? 'bg-blue-50 text-blue-700 font-medium dark:bg-blue-900/20 dark:text-blue-400'
            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
        } ${level > 0 ? 'ml-4' : ''}`}
      >
        {item.title}
      </Link>
      {item.children && item.children.length > 0 && (
        <ul className="mt-1 space-y-1">
          {item.children.map((child) => (
            <NavItemComponent key={child.path} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Sidebar({ navigation }: SidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
      <nav className="p-6">
        <div className="mb-6">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Documentation
          </Link>
        </div>
        <ul className="space-y-1">
          {navigation.map((item) => (
            <NavItemComponent key={item.path} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
