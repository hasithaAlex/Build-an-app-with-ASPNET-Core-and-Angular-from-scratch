namespace WebServerApp.API.Dtos
{
    public class PhotosForDto
    {
        
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public System.DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
    }
}