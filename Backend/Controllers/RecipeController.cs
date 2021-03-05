using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("Recipes")]
    public class RecipeController : ControllerBase
    {
        private readonly IRepository<Recipe> _recipeRepository;

        public RecipeController(IRepository<Recipe> recipeRepository)
        {
            _recipeRepository = recipeRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRecipes()
        {
            try {
                var recipes = await _recipeRepository.GetAll();
                return Ok(recipes);
                }
            catch(Exception){
                return NotFound($"/recipes/ Not found");
            }
        }    
    }
}
