using Microsoft.AspNetCore.Mvc;

namespace MindGame_BE.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
