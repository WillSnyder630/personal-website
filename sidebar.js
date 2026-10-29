class SiteSidebar extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute("active");
    const tagline = this.getAttribute("tagline") || "A place for the work I do and the life I am building around it.";
    const status = this.getAttribute("status");
    const sidebar = document.createElement("aside");
    const sidebarInner = document.createElement("div");

    sidebar.className = "sidebar";
    sidebarInner.className = "sidebar-inner";

    const name = document.createElement("h1");
    name.className = "name";
    name.textContent = "William Snyder";

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = "Senior Software Engineer";

    const taglineText = document.createElement("p");
    taglineText.className = "tagline";
    taglineText.textContent = tagline;

    const nav = document.createElement("nav");
    nav.className = "site-nav";
    nav.setAttribute("aria-label", "Main navigation");

    const pages = [
      ["home", "Home", "index.html"],
      ["work", "Work", "work.html"],
      ["personal", "Personal", "personal.html"],
      ["recipes", "Recipes", "recipes.html"]
    ];

    for (const [pageId, label, href] of pages) {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;

      if (pageId === activePage) {
        link.className = "active";
        link.setAttribute("aria-current", "page");
      }

      nav.append(link);
    }

    const contactList = document.createElement("ul");
    contactList.className = "contact-list";

    const emailItem = document.createElement("li");
    const email = document.createElement("a");
    email.href = "mailto:willsnyder630@gmail.com";
    email.textContent = "willsnyder630@gmail.com";
    emailItem.append(email);

    const phoneItem = document.createElement("li");
    phoneItem.textContent = "(952) 388-7308";

    const locationItem = document.createElement("li");
    locationItem.className = "location";
    locationItem.textContent = "Minneapolis, MN";

    contactList.append(emailItem, phoneItem, locationItem);
    sidebarInner.append(name, title, taglineText, nav, contactList);

    if (status) {
      const statusLine = document.createElement("p");
      const statusDot = document.createElement("span");
      statusLine.className = "status";
      statusDot.className = "status-dot";
      statusLine.append(statusDot, document.createTextNode(status));
      sidebarInner.append(statusLine);
    }

    sidebar.append(sidebarInner);
    this.replaceChildren(sidebar);
  }
}

customElements.define("site-sidebar", SiteSidebar);