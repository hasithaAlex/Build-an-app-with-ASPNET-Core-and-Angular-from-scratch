using WebServerApp.API.Models;
using WebServerApp.API.Dtos;
using AutoMapper;
using System.Linq;

namespace WebServerApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            
            CreateMap<User, UserForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt => {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(b => b.DateOfBirth.CalculateAge());
            });
            
            CreateMap<User, UserForDetailedDto>()
                        .ForMember(dest => dest.PhotoUrl, opt => {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            }) 
            .ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(b => b.DateOfBirth.CalculateAge());
            });
            
            CreateMap<Photo, PhotosForDto>();
        }
    }
}