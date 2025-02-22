using Microsoft.AspNetCore.Mvc;
using TiendaInteligenteBackend.Domain.Interfaces;

namespace TiendaInteligenteBackend.Presentation.Controllers;

[Route("api/Users")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserUsesCases _userUsesCases;

    public UserController(IUserUsesCases userUsesCases)
    {
        _userUsesCases = userUsesCases;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok();
    }
    
    
}