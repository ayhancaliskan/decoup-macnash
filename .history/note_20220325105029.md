    <template id="template_header_default_mac" inherit_id="website.layout" name="Template Header Default MAC" active="True">
        <xpath expr="//header//nav" position="replace">
            <nav data-name="Navbar" class="navbar navbar-expand-lg navbar-light o_colored_level o_cc shadow-sm">
                <div id="top_menu_container" class="container justify-content-start justify-content-lg-between">
                                 <!-- Brand -->
                <t t-call="website.placeholder_header_brand">
                    <t t-set="_link_class" t-value="'mr-4'"/>
                </t>
                <!-- Navbar Toggler -->
                <!-- <t t-call="website.navbar_toggler">
                    <t t-set="_toggler_class" t-value="'ml-auto'"/>
                </t> -->
                <!-- Navbar Collapse -->
                <div id="top_menu_collapse" class="collapse navbar-collapse order-last order-lg-0">
                    <t t-call="website.navbar_nav">
                        <t t-set="_nav_class" t-value="'flex-grow-1'"/>
                        <!-- Menu -->
                        <t t-foreach="website.menu_id.child_id" t-as="submenu">
                            <t t-call="website.submenu">
                                <t t-set="item_class" t-value="'nav-item'"/>
                                <t t-set="link_class" t-value="'nav-link'"/>
                                <t t-set="link_class" t-value="'nav-ayhan'"/>

                            </t>
                        </t>
                        <a>test</a>
                        <!-- Sign In -->
                        <t t-call="portal.placeholder_user_sign_in">
                            <t t-set="_item_class" t-value="'nav-item ml-lg-auto'"/>
                            <t t-set="_link_class" t-value="'nav-link font-weight-bold'"/>
                        </t>
                        <!-- User Dropdown -->
                        <!-- <t t-call="portal.user_dropdown">
                            <t t-set="_user_name" t-value="true"/>
                            <t t-set="_item_class" t-value="'nav-item dropdown ml-lg-auto'"/>
                            <t t-set="_link_class" t-value="'nav-link font-weight-bold'"/>
                        </t> -->
                    </t>
                </div>
                <!-- Language Selector -->
                <t t-call="website.placeholder_header_language_selector">
                    <t t-set="_div_classes" t-value="'ml-2'"/>
                </t>
                <!-- Button -->
                <div class="oe_structure oe_structure_solo" id="oe_structure_header_default_1"/>
                </div>
            </nav>
        </xpath>
    </template>