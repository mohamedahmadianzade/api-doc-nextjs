"use client";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { usePathname, useRouter } from "next/navigation";
export default function SidebarMenu() {
  const router = usePathname();
  console.log(router)
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem
            component={<Link href="/introduction" />}
            className={router == "/introduction" ? "activeMenu" : ""}
          >
            Introduction
          </MenuItem>
          <MenuItem
            component={<Link href="/targetGroup" />}
            className={router == "/targetGroup" ? "activeMenu" : ""}
          >
            Target Group
          </MenuItem>
          <MenuItem
            component={<Link href="/pricing" />}
            className={router == "/pricing" ? "activeMenu" : ""}
          >
            Pricing
          </MenuItem>
          <MenuItem
            component={<Link href="/authentication" />}
            className={router == "/authentication" ? "activeMenu" : ""}
          >
            Authentication
          </MenuItem>
          <MenuItem
            component={<Link href="/returnTypes" />}
            className={router == "/returnTypes" ? "activeMenu" : ""}
          >
            Return Types
          </MenuItem>

          <SubMenu
            label="Account"
            component={<Link href="/account" />}
          >
            <MenuItem
              component={<Link href="/account/plan" />}
              className={router === "/account/plan" ? "activeMenu" : ""}
            >
              Plan
            </MenuItem>
            <MenuItem
              component={<Link href="/account/credit" />}
              className={router === "/account/credit" ? "activeMenu" : ""}
            >
              Credit
            </MenuItem>
          </SubMenu>

          <MenuItem
            component={<Link href="/webhook" />}
            className={router == "/webhook" ? "activeMenu" : ""}
          >
            Webhook
          </MenuItem>
          <MenuItem
            component={<Link href="/videos" />}
            className={router == "/videos" ? "activeMenu" : ""}
          >
            Videos
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
