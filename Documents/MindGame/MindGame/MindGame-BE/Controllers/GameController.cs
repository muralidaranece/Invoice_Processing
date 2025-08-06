using Microsoft.AspNetCore.Mvc;

namespace MindGame_BE.Controllers
{
    public class GameController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
