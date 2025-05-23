import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  children: React.ReactNode
  className?: string
}

export function Breadcrumb({ children, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center text-sm text-gray-600 ${className}`}>
      <ol className="flex items-center space-x-2">{children}</ol>
    </nav>
  )
}

interface BreadcrumbItemProps {
  children: React.ReactNode
  isCurrentPage?: boolean
}

export function BreadcrumbItem({ children, isCurrentPage = false }: BreadcrumbItemProps) {
  return (
    <li className="flex items-center">
      {children}
      {!isCurrentPage && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
    </li>
  )
}

interface BreadcrumbLinkProps {
  href: string
  children: React.ReactNode
}

export function BreadcrumbLink({ href, children }: BreadcrumbLinkProps) {
  return (
    <Link href={href} className="hover:text-gray-900 transition-colors">
      {children}
    </Link>
  )
}
