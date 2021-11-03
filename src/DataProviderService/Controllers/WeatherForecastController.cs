using Microsoft.AspNetCore.Mvc;

namespace DataProviderService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        private readonly ILogger<DataController> _logger;

        public DataController(ILogger<DataController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<SampleData> Get()
        {
            string fileName = Path.Combine("Data", "SampleData.json");
            string jsonString = System.IO.File.ReadAllText(fileName);
            return System.Text.Json.JsonSerializer.Deserialize<List<SampleData>>(jsonString);
        }
    }
}
