from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website
from werkzeug.exceptions import NotFound


# class MacnashController(Website):
#     # heritage d'un controller existant website (à ne pas faire car l'user ne pourra plus modifier la page en question)
#     @http.route()
#     def index(self, **kw):
#         values = {}
#         return request.render('mac_website.website_home_page_macnash', values)

class MacnashController(http.Controller):
    @http.route(['/website'], auth="public", website=True)
    def get_index(self, **kw):
        values = {
            [""]
        }
        return request.render('mac_website.website_home_page_macnash', values)

