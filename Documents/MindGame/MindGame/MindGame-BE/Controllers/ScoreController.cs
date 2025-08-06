using Microsoft.AspNetCore.Mvc;

namespace MindGame_BE.Controllers
{
    public class ScoreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
